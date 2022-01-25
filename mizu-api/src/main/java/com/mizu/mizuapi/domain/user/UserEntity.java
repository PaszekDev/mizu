package com.mizu.mizuapi.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.mizu.mizuapi.domain.BaseEntityWithId;
import com.mizu.mizuapi.domain.permission.PermissionsEntity;
import com.mizu.mizuapi.domain.session.SessionEntity;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity extends BaseEntityWithId {

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @OneToOne(orphanRemoval = true, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "session_id")
    private SessionEntity session;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_permissions_relation",
    joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "permission_id"))
    private Set<PermissionsEntity> permissions;


}
