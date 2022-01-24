package com.mizu.mizuapi.service.user.mapper;


import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericMapper;
import com.mizu.mizuapi.service.session.mapper.SessionMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements GenericMapper<UserEntity,UserDTO> {

    private final SessionMapper sessionMapper = new SessionMapper();

    public UserDTO toDto(UserEntity userEntity) {
        return UserDTO.builder()
                .id(userEntity.getId())
                .username(userEntity.getUsername())
                .password(userEntity.getPassword())
                .email(userEntity.getEmail())
                .session(userEntity.getSession() != null ? sessionMapper.toDto(userEntity.getSession()) : null)
                .build();
    }

    public UserEntity fromDto(UserDTO userDTO) {
        return UserEntity.builder()
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .email(userDTO.getEmail())
                .build();
    }
}
