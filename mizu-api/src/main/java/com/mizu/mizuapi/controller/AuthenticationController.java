package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.repository.SessionRepository;
import com.mizu.mizuapi.request.LoginRequest;
import com.mizu.mizuapi.service.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController(value = "/api/auth")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    @ResponseBody
    public UserDTO register(@RequestBody UserDTO userDTO) {
        return authenticationService.register(userDTO);
    }

    @PostMapping("/login")
    @ResponseBody
    public SessionDTO login(@RequestBody LoginRequest loginRequest) {
        return authenticationService.login(loginRequest);
    }

    @PostMapping("/isSessionExpired")
    public Boolean isSessionExpired(@RequestParam String sessionKey) {
        return authenticationService.isSessionExpired(sessionKey);
    }


}
