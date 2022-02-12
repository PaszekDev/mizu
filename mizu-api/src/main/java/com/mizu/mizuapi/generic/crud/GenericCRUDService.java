package com.mizu.mizuapi.generic.crud;

import com.mizu.mizuapi.domain.permission.UserGroup;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.request.search.Param;
import com.mizu.mizuapi.request.search.SearchRequest;
import com.mizu.mizuapi.response.EntityList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


public abstract class GenericCRUDService<T, V extends GenericCRUDEntity<T, V>> {

    private final GenericMapper<T, V> genericMapper;
    private final GenericCRUDRepository<T, V> genericCRUDRepository;
    private final EntityManager em;
    private final String[] fieldToOmmit = {"id", "birthdate", "session", "password", "groupPermissionList"};
    final Class<T> clazz;

    public GenericCRUDService(GenericCRUDRepository<T, V> genericCRUDRepository, GenericMapper<T, V> genericMapper, EntityManager em, Class<T> clazz) {
        this.genericCRUDRepository = genericCRUDRepository;
        this.genericMapper = genericMapper;
        this.em = em;
        this.clazz = clazz;

    }

    public Page<V> getPage(Pageable pageable) {
        return genericCRUDRepository.findAll(pageable).map(genericMapper::toDto);
    }

    public V get(Long id) {
        T dbEntity = genericCRUDRepository.findById(id).orElseThrow(EntityNotFound::new);
        return genericMapper.toDto(dbEntity);
    }

    @Transactional
    public V create(V newEntity) {
        newEntity.setId(null);
        T dbEntity = genericMapper.fromDto(newEntity);
        return genericMapper.toDto(genericCRUDRepository.save(dbEntity));
    }

    @Transactional
    public V update(V updated) {
        get(updated.getId());//check if exists
        T dbEntity = genericMapper.fromDto(updated);
        return genericMapper.toDto(genericCRUDRepository.save(dbEntity));
    }

    @Transactional
    public void delete(Long id) {
        get(id); // check if object exists
        genericCRUDRepository.deleteById(id);
    }

    public EntityList<T> getBySearchRequest(SearchRequest searchRequest) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<T> cq = cb.createQuery(clazz);

        Root<T> genericEntity = cq.from(clazz);
        List<Predicate> predicates = new ArrayList<>();
        List<Predicate> predicateParam = new ArrayList<>();

        if (!searchRequest.getParams().isEmpty()) {
            for (Param param : searchRequest.getParams()) {
                if (hasField(param.getFieldName()) && !UserGroup.isEnum(param.getValue())) {
                    predicateParam.add(cb.or(cb.equal(genericEntity.get(param.getFieldName()), param.getValue())));
                } else if (hasField(param.getFieldName()) && UserGroup.isEnum(param.getValue().toUpperCase())) {
                    predicateParam.add(cb.or(cb.equal(genericEntity.get(param.getFieldName()).as(String.class), param.getValue().toUpperCase())));
                }
            }
        }

        if (!Objects.equals(searchRequest.getValue(), "")) {
            for (Field field : clazz.getDeclaredFields()) {
                if (Arrays.stream(fieldToOmmit).noneMatch(e -> e.equals(field.getName()))) {
                    predicates.add(cb.or(cb.like(genericEntity.get(field.getName()).as(String.class), "%" + searchRequest.getValue() + "%")));
                }
            }
        }

        if (Objects.equals(searchRequest.getValue(), "") && searchRequest.getParams().isEmpty()) {
            cq.select(genericEntity);
        } else {
            if (predicates.isEmpty()) {
                cq.where(cb.or(predicateParam.toArray(new Predicate[0])));
            } else {
                cq.where(cb.or(predicates.toArray(new Predicate[0])), cb.or(predicateParam.toArray(new Predicate[0])));
            }

        }


        TypedQuery<T> query = em.createQuery(cq);


        int totalRows = query.getResultList().size();
        query.setFirstResult(searchRequest.getPageSize() * searchRequest.getPageNumber());
        query.setMaxResults(searchRequest.getPageSize());

        return new EntityList(totalRows, query.getResultList().stream().map(genericMapper::toDto).collect(Collectors.toList()));


    }

    private boolean hasField(String fieldName) {
        for (Field field : UserEntity.class.getDeclaredFields()) {
            if (field.getName().equals(fieldName)) {
                return true;
            }
        }
        return false;
    }
}
