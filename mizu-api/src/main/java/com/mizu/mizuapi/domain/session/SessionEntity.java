package com.mizu.mizuapi.domain.session;

import com.mizu.mizuapi.domain.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "session")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "session_key")
    private String sessionKey;

    @Column(name = "expiration_date")
    private LocalDateTime expirationDate;

    @Column(name = "has_do_not_logout")
    private Boolean hasDoNotLogout;

    @Column(name = "user_remote_address")
    private String userRemoteAddress;

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, orphanRemoval = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;


}
