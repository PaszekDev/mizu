package com.mizu.mizuapi.service.authentication;

import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.request.LoginRequest;
import org.springframework.http.ResponseEntity;

public interface AuthenticationService {
    UserDTO register(UserDTO userDTO);
    SessionDTO login(LoginRequest loginRequest);
    Boolean isSessionExpired(String sessionKey);
    Boolean isUsernameTaken(String username);
    Boolean isEmailTaken(String email);
}
