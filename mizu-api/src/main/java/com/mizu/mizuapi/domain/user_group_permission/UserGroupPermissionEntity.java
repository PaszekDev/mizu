package com.mizu.mizuapi.domain.user_group_permission;

import com.mizu.mizuapi.domain.permission.PermissionsEntity;
import com.mizu.mizuapi.domain.user.UserEntity;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "user_group_permission")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserGroupPermissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "permission_group_name")
    private String groupName;

    @ManyToMany(mappedBy = "groupPermissionList", fetch = FetchType.LAZY)
    private List<UserEntity> userEntities;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    @JoinTable(name = "user_group_permission_relation_permissions",
            joinColumns = @JoinColumn(name = "user_group_permission_id"), inverseJoinColumns = @JoinColumn(name = "permission_id"))
    private Set<PermissionsEntity> permissionList;

}
