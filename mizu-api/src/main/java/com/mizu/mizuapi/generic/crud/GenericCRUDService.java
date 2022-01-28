package com.mizu.mizuapi.generic.crud;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;


public abstract class GenericCRUDService<T, V extends GenericCRUDEntity<T, V>> {

    private final GenericMapper<T, V> genericMapper;
    private final GenericCRUDRepository<T, V> genericCRUDRepository;

    public GenericCRUDService(GenericCRUDRepository<T, V> genericCRUDRepository, GenericMapper<T, V> genericMapper) {
        this.genericCRUDRepository = genericCRUDRepository;
        this.genericMapper = genericMapper;

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

}