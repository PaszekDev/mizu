package com.mizu.mizuapi.aspects;

import com.mizu.mizuapi.domain.history.LoginHistoryEntity;
import com.mizu.mizuapi.repository.LoginHistoryRepository;
import com.mizu.mizuapi.request.LoginRequest;
import lombok.AllArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;

@Aspect
@Component
@AllArgsConstructor
public class LoginHistoryAspect {

    private final LoginHistoryRepository loginHistoryRepository;

    @AfterReturning("execution(* com.mizu.mizuapi.service.authentication.impl.AuthenticationServiceImpl.login(..))")
    public void saveLoginHistory(JoinPoint joinPoint) {
        LoginRequest loginRequest = (LoginRequest) Arrays.stream(joinPoint.getArgs()).findFirst().get();
        LoginHistoryEntity loginHistoryEntity = new LoginHistoryEntity();
        loginHistoryEntity.setLoginDate(LocalDateTime.now());
        loginHistoryEntity.setEmail(loginRequest.getEmail());
        loginHistoryEntity.setRemoteAddress(loginRequest.getRemoteAddr());
        loginHistoryRepository.save(loginHistoryEntity);
    }

}
