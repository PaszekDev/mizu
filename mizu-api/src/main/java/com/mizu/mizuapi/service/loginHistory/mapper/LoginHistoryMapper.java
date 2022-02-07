package com.mizu.mizuapi.service.loginHistory.mapper;

import com.mizu.mizuapi.domain.history.LoginHistoryEntity;
import com.mizu.mizuapi.dto.LoginHistoryDTO;
import com.mizu.mizuapi.generic.crud.GenericMapper;
import org.springframework.stereotype.Component;

@Component
public class LoginHistoryMapper implements GenericMapper<LoginHistoryEntity, LoginHistoryDTO> {

    public LoginHistoryDTO toDto(LoginHistoryEntity loginHistoryEntity) {
        return LoginHistoryDTO.builder()
                .id(loginHistoryEntity.getId())
                .email(loginHistoryEntity.getEmail())
                .remoteAddress(loginHistoryEntity.getRemoteAddress())
                .loginDate(loginHistoryEntity.getLoginDate())
                .build();
    }

    public LoginHistoryEntity fromDto(LoginHistoryDTO loginHistoryDTO) {
        return LoginHistoryEntity.builder()
                .id(loginHistoryDTO.getId())
                .email(loginHistoryDTO.getEmail())
                .remoteAddress(loginHistoryDTO.getRemoteAddress())
                .loginDate(loginHistoryDTO.getLoginDate())
                .build();
    }
}
