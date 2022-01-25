package com.mizu.mizuapi.dto;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.generic.crud.GenericCRUDEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO implements GenericCRUDEntity<UserEntity,UserDTO> {
    private Long id;
    private String username;
    private String password;
    private String email;
    private SessionDTO session;
}
