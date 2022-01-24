package com.mizu.mizuapi.domain.user;

import com.mizu.mizuapi.domain.BaseEntityWithId;
import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.dto.SessionDTO;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity extends BaseEntityWithId implements GenericCRUDEntity<UserEntity,UserDTO> {

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @OneToOne(orphanRemoval = true, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "session_id")
    private SessionEntity session;

}
