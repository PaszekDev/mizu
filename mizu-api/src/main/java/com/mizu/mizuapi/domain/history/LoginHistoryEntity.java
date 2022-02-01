package com.mizu.mizuapi.domain.history;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mizu.mizuapi.dto.LoginHistoryDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "login_history")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginHistoryEntity implements GenericCRUDEntity<LoginHistoryEntity, LoginHistoryDTO> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "login_date")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime loginDate;

    @Column(name = "remote_address")
    private String remoteAddress;
}
