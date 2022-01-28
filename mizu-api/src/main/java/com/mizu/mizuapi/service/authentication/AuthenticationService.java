package com.mizu.mizuapi.service.authentication;

import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.request.LoginRequest;

public interface AuthenticationService {
    UserDTO register(UserDTO userDTO);

    SessionDTO login(LoginRequest loginRequest);

    Boolean isSessionExpired(String sessionKey);

    Boolean isUsernameTaken(String username);

    Boolean isEmailTaken(String email);

    Boolean isSessionAlive(SessionDTO sessionDTO);

    Boolean logout(String sessionKey);
}
