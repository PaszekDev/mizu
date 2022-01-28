package com.mizu.mizuapi.service.user.mapper;


import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericMapper;
import com.mizu.mizuapi.service.session.mapper.SessionMapper;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements GenericMapper<UserEntity, UserDTO> {

    private final SessionMapper sessionMapper = new SessionMapper();

    public UserDTO toDto(UserEntity userEntity) {
        return UserDTO.builder()
                .id(userEntity.getId())
                .email(userEntity.getEmail())
                .password(userEntity.getPassword())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .session(userEntity.getSession() != null ? sessionMapper.toDto(userEntity.getSession()) : null)
                .birthdate(userEntity.getBirthdate())
                .index(userEntity.getIndex())
                .build();
    }

    public UserEntity fromDto(UserDTO userDTO) {
        return UserEntity.builder()
                .id(userDTO.getId())
                .email(userDTO.getEmail())
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .password(userDTO.getPassword())
                .birthdate(userDTO.getBirthdate())
                .index(userDTO.getIndex())
                .build();
    }
}
