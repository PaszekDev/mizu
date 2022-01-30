package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import com.mizu.mizuapi.repository.PermissionsRepository;
import com.mizu.mizuapi.repository.SessionRepository;
import com.mizu.mizuapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@Slf4j
@AllArgsConstructor
public class InitAdditionalProperties implements ApplicationRunner {

    private final PermissionsRepository permissionRepository;
    private final SessionRepository sessionRepository;
    private final UserRepository userRepository;
    private final UserGroupPermissionRepository userGroupPErmissionRepository;

    @Override
    public void run(ApplicationArguments args) {
        initPermissions();
        initNewSessions();
    }

    private void initNewSessions() {
        List<UserEntity> userEntityList = userRepository.getAllWhereSessionIsNotNull();
        userEntityList.forEach(e -> {
            Long idToDelete = e.getSession().getId();
            e.setSession(null);
            userRepository.save(e);
            sessionRepository.deleteById(idToDelete);
        });
    }

    private void initPermissions() {
        Set<PermissionsEntity> permissionsEntities = permissionRepository.getAll();
        for (Permission permission : Permission.values()) {
            if (permissionsEntities.stream().noneMatch(e -> e.getPermission().equals(permission.name()))) {
                PermissionsEntity permissions = new PermissionsEntity();
                permissions.setPermission(permission.name());
                permissionsEntities.add(permissions);
            }
        }

        permissionRepository.saveAll(permissionsEntities);


        Set<UserGroupPermissionEntity> userGroupPermissionEntities = new HashSet<>();

        for (UserGroup group : UserGroup.values()) {
            UserGroupPermissionEntity userGroupPermission = new UserGroupPermissionEntity();
            userGroupPermission.setGroupName(group.name());
            userGroupPermission.setPermissionsList(permissionsEntities);
            userGroupPermissionEntities.add(userGroupPermission);
        }

        userGroupPErmissionRepository.saveAll(userGroupPermissionEntities);

    }
}
