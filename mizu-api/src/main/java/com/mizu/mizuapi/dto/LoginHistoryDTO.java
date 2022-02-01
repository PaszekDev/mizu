package com.mizu.mizuapi.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mizu.mizuapi.domain.history.LoginHistoryEntity;
import com.mizu.mizuapi.generic.crud.GenericCRUDEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class LoginHistoryDTO implements GenericCRUDEntity<LoginHistoryEntity, LoginHistoryDTO> {
    private Long id;
    private String email;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime loginDate;
    private String remoteAddress;
}
