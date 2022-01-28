package com.mizu.mizuapi.dto;

import com.mizu.mizuapi.domain.permission.UserGroup;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.generic.crud.GenericCRUDEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class UserDTO implements GenericCRUDEntity<UserEntity, UserDTO> {
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private LocalDate birthdate;
    private Long index;
    private UserGroup userGroup;
    private SessionDTO session;
}
