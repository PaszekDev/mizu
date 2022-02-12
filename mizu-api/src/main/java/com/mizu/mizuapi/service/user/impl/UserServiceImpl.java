package com.mizu.mizuapi.service.user.impl;


import com.mizu.mizuapi.domain.permission.UserGroup;
import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.exception.UserWithSessionNotFound;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.service.session.mapper.SessionMapper;
import com.mizu.mizuapi.service.user.UserService;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final SessionMapper sessionMapper;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private EntityManager em;

    @Override
    public UserDTO getLastUserByIndex() {
        return userMapper.toDto(userRepository.getUsersDSC());
    }

    @Override
    public List<UserDTO> getAllByUserGroups(String[] userGroups) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<UserEntity> cq = cb.createQuery(UserEntity.class);

        Root<UserEntity> userEntity = cq.from(UserEntity.class);
        List<Predicate> predicates = new ArrayList<>();

        for (String userGroup : userGroups) {
            predicates.add(cb.equal(userEntity.get("userGroup"), UserGroup.valueOf(userGroup)));
        }

        cq.where(cb.or(predicates.toArray(new Predicate[0])));
        return em.createQuery(cq).getResultList().stream().map(userMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserBySessionKey(String sessionKey) {
        UserEntity user = userRepository.getUserBySessionKey(sessionKey);
        if (user == null) {
            throw new UserWithSessionNotFound();
        }
        return userMapper.toDto(user);
    }

    @Override
    public Page<UserDTO> getAllByUserGroup(Pageable pageable, String userGroup) {
        List<UserDTO> chosenEntities = new ArrayList<>();
        List<UserEntity> dbEntities = userRepository.getByUserGroup(UserGroup.valueOf(userGroup.toUpperCase()));
        dbEntities.forEach(userEntity -> chosenEntities.add(userMapper.toDto(userEntity)));
        return new PageImpl<>(chosenEntities);
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        UserEntity user = userMapper.fromDto(userDTO);
        SessionEntity session = sessionMapper.fromDto(userDTO.getSession());
        user.setSession(session);
        userRepository.save(user);
        return userDTO;
    }
}
   
