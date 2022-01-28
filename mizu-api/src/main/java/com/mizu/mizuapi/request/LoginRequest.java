package com.mizu.mizuapi.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    private String email;
    private String password;
    private boolean hasDoNotLogout;
    private String remoteAddr;
}
