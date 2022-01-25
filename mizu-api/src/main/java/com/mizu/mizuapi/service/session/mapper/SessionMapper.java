package com.mizu.mizuapi.service.session.mapper;

import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.generic.crud.GenericMapper;

public class SessionMapper implements GenericMapper<SessionEntity,SessionDTO> {
    public SessionDTO toDto(SessionEntity source) {
        return SessionDTO.builder()
                .id(source.getId())
                .sessionKey(source.getSessionKey())
                .expirationDate(source.getExpirationDate())
                .hasDoNotLogout(source.getHasDoNotLogout())
                .build();
    }

    public SessionEntity fromDto(SessionDTO dto) {
        return SessionEntity.builder()
                .sessionKey(dto.getSessionKey())
                .hasDoNotLogout(dto.isHasDoNotLogout())
                .expirationDate(dto.getExpirationDate())
                .build();
    }

}
