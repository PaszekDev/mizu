package com.mizu.mizuapi.service.authentication.impl;

import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.exception.UserNotFoundException;
import com.mizu.mizuapi.repository.AuthenticationRepository;
import com.mizu.mizuapi.repository.SessionRepository;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.request.LoginRequest;
import com.mizu.mizuapi.service.authentication.AuthenticationService;
import com.mizu.mizuapi.service.session.mapper.SessionMapper;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Value("${plus-minutes-expiration-time}")
    private Integer extraMinutes;

    @Autowired
    AuthenticationRepository authenticationRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SessionRepository sessionRepository;

    private final UserMapper userMapper = new UserMapper();

    private final SessionMapper sessionMapper = new SessionMapper();

    @Override
    public UserDTO register(UserDTO userDTO) {
            userDTO.setId(null);
            UserEntity user = userMapper.fromDto(userDTO);
            return userMapper.toDto(authenticationRepository.save(user));
    }

    @Override
    public SessionDTO login(LoginRequest loginRequest) {
        UserEntity user = userRepository.getUserByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if(user != null) {
            SessionEntity session = SessionEntity.builder()
                    .sessionKey(UUID.randomUUID().toString())
                    .expirationDate(LocalDateTime.now().plusMinutes(extraMinutes))
                    .hasDoNotLogout(loginRequest.isHasDoNotLogout())
                    .user(user)
                    .build();
            user.setSession(session);
            userRepository.save(user);
            return sessionMapper.toDto(session);
        }
        throw new UserNotFoundException();
    }

    @Override
    public Boolean isSessionExpired(String sessionKey) {
        SessionEntity session = sessionRepository.getSessionBySessionKey(sessionKey);
        if(session == null) {
            return false;
        }
        return !session.getHasDoNotLogout() && session.getExpirationDate().isBefore(LocalDateTime.now());
    }

    @Override
    public Boolean isUsernameTaken(String username) {
        return authenticationRepository.isUsernameTaken(username);
    }

    @Override
    public Boolean isEmailTaken(String email) {
        return authenticationRepository.isEmailTaken(email);
    }
}
