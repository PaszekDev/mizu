package com.mizu.mizuapi.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private String email;
    private SessionDTO session;
}
