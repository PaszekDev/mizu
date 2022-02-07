package com.mizu.mizuapi.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SessionWithUserPermissionDTO extends SessionDTO {

    public SessionWithUserPermissionDTO(SessionDTO session) {
        super(session.getId(), session.getSessionKey(), session.getExpirationDate(), session.isHasDoNotLogout(), session.getUserRemoteAddress());
    }

    private List<UserGroupPermissionDTO> userGroupPermissionDTOS;
}
