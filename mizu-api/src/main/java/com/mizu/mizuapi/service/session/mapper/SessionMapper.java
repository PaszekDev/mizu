package com.mizu.mizuapi.service.session.mapper;

import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.dto.SessionDTO;

public class SessionMapper {
    public SessionDTO toDto(SessionEntity session) {
        return SessionDTO.builder()
                .id(session.getId())
                .sessionKey(session.getSessionKey())
                .expirationDate(session.getExpirationDate())
                .hasDoNotLogout(session.getHasDoNotLogout())
                .build();
    }

    public SessionEntity fromDto(SessionDTO sessionDTO) {
        return SessionEntity.builder()
                .sessionKey(sessionDTO.getSessionKey())
                .hasDoNotLogout(sessionDTO.isHasDoNotLogout())
                .expirationDate(sessionDTO.getExpirationDate())
                .build();
    }
}
