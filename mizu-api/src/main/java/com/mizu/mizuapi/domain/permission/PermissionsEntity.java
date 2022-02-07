package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "permissions")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PermissionsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    private String permission;

    @ManyToMany(mappedBy = "permissionList")
    private Set<UserGroupPermissionEntity> userGroupPermissission;

}
