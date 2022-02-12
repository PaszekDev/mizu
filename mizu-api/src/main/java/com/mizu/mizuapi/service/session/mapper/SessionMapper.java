package com.mizu.mizuapi.service.session.mapper;

import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.SessionWithUserPermissionDTO;
import com.mizu.mizuapi.generic.crud.GenericMapper;
import com.mizu.mizuapi.service.permission.mapper.UserGroupPermissionMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SessionMapper implements GenericMapper<SessionEntity, SessionDTO> {

    private final UserGroupPermissionMapper userGroupPermissionMapper = new UserGroupPermissionMapper();

    public SessionDTO toDto(SessionEntity source) {
        return SessionDTO.builder()
                .id(source.getId())
                .sessionKey(source.getSessionKey())
                .expirationDate(source.getExpirationDate())
                .hasDoNotLogout(source.getHasDoNotLogout())
                .userRemoteAddress(source.getUserRemoteAddress())
                .build();
    }

    public SessionEntity fromDto(SessionDTO dto) {
        return SessionEntity.builder()
                .sessionKey(dto.getSessionKey())
                .hasDoNotLogout(dto.isHasDoNotLogout())
                .expirationDate(dto.getExpirationDate())
                .userRemoteAddress(dto.getUserRemoteAddress())
                .build();
    }

    public SessionWithUserPermissionDTO toDtoWithUserPermissionDTO(SessionEntity session, List<UserGroupPermissionEntity> list) {
        SessionWithUserPermissionDTO sessionWithUserPermissionDTO = new SessionWithUserPermissionDTO(toDto(session));
        if (list != null) {
            sessionWithUserPermissionDTO.setUserGroupPermissionDTOS(list.stream().map(userGroupPermissionMapper::toDto).collect(Collectors.toList()));
        }
        return new SessionWithUserPermissionDTO(toDto(session));
    }

}
