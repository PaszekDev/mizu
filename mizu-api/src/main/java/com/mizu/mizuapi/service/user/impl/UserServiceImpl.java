package com.mizu.mizuapi.service.user.impl;


import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.service.user.UserService;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Locale;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public UserDTO getLastUserByIndex() {
        return userMapper.toDto(userRepository.getUsersDSC());
    }

    @Override
    public Page<UserDTO> getAllByUserGroup(Pageable pageable, String userGroup) {
        List<UserDTO> chosenEntities = new ArrayList<>();
        List<UserEntity> dbEntities = userRepository.getByUserGroup(userGroup.toUpperCase(Locale.ROOT));
        dbEntities.stream().forEach(userEntity -> chosenEntities.add(userMapper.toDto(userEntity)));
        return new PageImpl<>(chosenEntities);
    }
}