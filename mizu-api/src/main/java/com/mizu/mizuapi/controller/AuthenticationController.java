package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.request.LoginRequest;
import com.mizu.mizuapi.service.authentication.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
@AllArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @ResponseBody
    public UserDTO register(@RequestBody UserDTO userDTO) {
        return authenticationService.register(userDTO);
    }

    @PostMapping("/login")
    @ResponseBody
    public SessionDTO login(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {
        loginRequest.setRemoteAddr(request.getRemoteAddr());
        return authenticationService.login(loginRequest);
    }

    @DeleteMapping("/logout")
    @ResponseStatus(HttpStatus.OK)
    public Boolean logout(@RequestHeader(value = "sessionKey") String sessionKey) {
        return authenticationService.logout(sessionKey);
    }

    @PostMapping("/isSessionExpired")
    public Boolean isSessionExpired(@RequestParam String sessionKey) {
        return authenticationService.isSessionExpired(sessionKey);
    }

    @PostMapping("/check-alive-session")
    public Boolean isSessionAlive(@RequestBody SessionDTO sessionDTO) {
        return this.authenticationService.isSessionAlive(sessionDTO);
    }


}
