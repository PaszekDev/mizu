package com.mizu.mizuapi.domain.user_group_permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_group_permission")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserGroupPermissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "group_name")
    private String groupName;


}
