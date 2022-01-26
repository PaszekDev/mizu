package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.user.UserGroup;
import com.mizu.mizuapi.repository.PermissionsRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@Slf4j
@AllArgsConstructor
public class PermissionInit implements ApplicationRunner {

    private final PermissionsRepository permissionGroupRepository;

    @Override
    public void run(ApplicationArguments args) {
        Set<PermissionsEntity> permissionsEntities = permissionGroupRepository.getAll();
        for (UserGroup group : UserGroup.values()) {
            for (Permission permission : Permission.values()) {
                if(permissionsEntities.stream().noneMatch(e-> e.getGroupName().equals(group.name()) && e.getPermission().equals(permission.name()))) {
                    PermissionsEntity permissions = new PermissionsEntity();
                    permissions.setGroupName(group.name());
                    permissions.setPermission(permission.name());
                    permissionGroupRepository.save(permissions);
                }
            }
        }
    }
}
