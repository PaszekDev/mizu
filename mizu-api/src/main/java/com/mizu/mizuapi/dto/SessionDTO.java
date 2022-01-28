package com.mizu.mizuapi.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class SessionDTO {
    private Long id;
    private String sessionKey;
    private LocalDateTime expirationDate;
    private boolean hasDoNotLogout;
    private String userRemoteAddress;
}
