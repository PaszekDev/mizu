package com.mizu.mizuapi;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.repository.AuthenticationRepository;
import com.mizu.mizuapi.request.LoginRequest;
import com.mizu.mizuapi.service.authentication.AuthenticationService;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import org.apache.tomcat.jni.Local;
import org.junit.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.UUID;

@RunWith(MockitoJUnitRunner.class)
class MizuApiApplicationTests {

    @Mock
    AuthenticationRepository authenticationRepository;

    @Mock
    AuthenticationService authenticationService;

    private final UserMapper userMapper = new UserMapper();

    @Test
    void register() {
        UserDTO userDTO = UserDTO.builder()
                .username("fellowes3")
                .password("admin")
                .email("okej@wp.pl")
                .build();
        UserEntity user = userMapper.fromDto(userDTO);
        Mockito.when(authenticationRepository.save(user)).thenReturn(user);
        UserEntity newUser = authenticationRepository.save(user);
        Assertions.assertEquals(newUser.getUsername(),user.getUsername());
    }

    @Test
    void login() {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("fellowes3");
        loginRequest.setPassword("admin");
        loginRequest.setHasDoNotLogout(true);
        Mockito.when(authenticationService.login(loginRequest)).thenReturn(new SessionDTO(1L, UUID.randomUUID().toString(), LocalDateTime.now(),loginRequest.isHasDoNotLogout()));
        SessionDTO sessionDTO = authenticationService.login(loginRequest);
        Assertions.assertEquals(sessionDTO.isHasDoNotLogout(),loginRequest.isHasDoNotLogout());
    }

    @Test
    void isSessionExpiredTrueWithoutUserDoNotLogout() {
        LocalDateTime sessionTime = LocalDateTime.now().plusMinutes(5);
        SessionDTO sessionDTO = new SessionDTO(1L,UUID.randomUUID().toString(),sessionTime,false);
        Assertions.assertFalse(!sessionDTO.isHasDoNotLogout() && sessionDTO.getExpirationDate().isBefore(LocalDateTime.now()));
    }

    @Test
    void isSessionExpiredFalseWithoutUserDoNotLogout() {
        LocalDateTime sessionTime = LocalDateTime.now().minusMinutes(5);
        SessionDTO sessionDTO = new SessionDTO(1L,UUID.randomUUID().toString(),sessionTime,false);
        Assertions.assertTrue(!sessionDTO.isHasDoNotLogout() && sessionDTO.getExpirationDate().isBefore(LocalDateTime.now()));
    }

    @Test
    void isSessionExpiredWithUserDoNotLogout() {
        LocalDateTime sessionTime = LocalDateTime.now().minusMinutes(5);
        SessionDTO sessionDTO = new SessionDTO(1L,UUID.randomUUID().toString(),sessionTime,true);
        Assertions.assertFalse(!sessionDTO.isHasDoNotLogout() && sessionDTO.getExpirationDate().isBefore(LocalDateTime.now()));
    }

}
