package com.mizu.mizuapi.service.authentication.impl;

import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.SessionWithUserPermissionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.exception.EmailOrPasswordIsIncorrectException;
import com.mizu.mizuapi.exception.UserNotFoundException;
import com.mizu.mizuapi.repository.AuthenticationRepository;
import com.mizu.mizuapi.repository.SessionRepository;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.request.LoginRequest;
import com.mizu.mizuapi.service.authentication.AuthenticationService;
import com.mizu.mizuapi.service.session.SessionService;
import com.mizu.mizuapi.service.session.mapper.SessionMapper;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    @Value("${plus-minutes-expiration-time}")
    private Integer extraMinutes;

    @Value("${start-from-index}")
    private Long firstIndex;


    private final AuthenticationRepository authenticationRepository;
    private final UserRepository userRepository;
    private final SessionRepository sessionRepository;
    private final SessionService sessionService;
    private final UserMapper userMapper = new UserMapper();
    private final SessionMapper sessionMapper = new SessionMapper();
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDTO register(UserDTO userDTO) {
        userDTO.setId(null);
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userDTO.setIndex(generateIndex());
        UserEntity user = userMapper.fromDto(userDTO);
        return userMapper.toDto(authenticationRepository.save(user));
    }

    @Override
    public SessionWithUserPermissionDTO login(LoginRequest loginRequest) {
        UserEntity user = userRepository.getUserByEmail(loginRequest.getEmail());

        if (!passwordEncoder.matches(loginRequest.getPassword(), loginRequest.getPassword())) {
            throw new EmailOrPasswordIsIncorrectException();
        }

        if (user != null) {
            SessionEntity session = SessionEntity.builder()
                    .sessionKey(UUID.randomUUID().toString())
                    .expirationDate(LocalDateTime.now().plusMinutes(extraMinutes))
                    .hasDoNotLogout(loginRequest.isHasDoNotLogout())
                    .userRemoteAddress(loginRequest.getRemoteAddr())
                    .user(user)
                    .build();
            user.setSession(session);
            userRepository.save(user);
            return sessionMapper.toDtoWithUserPermissionDTO(session, user.getGroupPermissionList());
        }
        throw new UserNotFoundException();
    }

    @Override
    public Boolean isSessionExpired(String sessionKey) {
        SessionEntity session = sessionRepository.getSessionBySessionKey(sessionKey);
        if (session == null) {
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

    @Override
    public Boolean isSessionAlive(SessionDTO sessionDTO) {
        SessionDTO session = sessionService.getBySessionKey(sessionDTO.getSessionKey());
        return session != null;
    }

    @Override
    public Boolean logout(String sessionKey) {
        UserEntity user = userRepository.getUserBySessionKey(sessionKey);
        String sessionEntityKey = user.getSession().getSessionKey();
        user.setSession(null);
        userRepository.save(user);
        sessionRepository.deleteSessionBySessionKey(sessionEntityKey);
        return true;
    }

    private Long generateIndex() {
        UserEntity user = userRepository.getUsersDSC();
        if (user != null) {
            UserDTO userDTO = userMapper.toDto(user);
            return userDTO.getIndex() + 1;
        } else {
            return firstIndex;
        }
    }
}
