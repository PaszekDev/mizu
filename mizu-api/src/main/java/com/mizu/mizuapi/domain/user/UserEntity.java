package com.mizu.mizuapi.domain.user;


import com.mizu.mizuapi.domain.permission.UserGroup;
import com.mizu.mizuapi.domain.session.SessionEntity;
import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity implements GenericCRUDEntity<UserEntity, UserDTO> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "birthdate")
    private LocalDate birthdate;

    @Column(name = "index")
    private Long index;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_group")
    private UserGroup userGroup;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "session_id")
    private SessionEntity session;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    @JoinTable(name = "user_user_group_permission_relation",
            joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "user_group_permission_id"))
    private List<UserGroupPermissionEntity> groupPermissionList;

}
