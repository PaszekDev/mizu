package com.mizu.mizuapi.service.user.impl;

import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.service.user.UserService;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    private final UserMapper userMapper = new UserMapper();

    @Override
    public UserDTO getLastUserByIndex() {
        return userMapper.toDto(userRepository.getUsersDSC());
    }
}
