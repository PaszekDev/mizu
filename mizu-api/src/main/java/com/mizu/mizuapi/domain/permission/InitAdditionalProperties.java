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
    private final UserGroupPermissionRepository userGroupPermissionRepository;

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

        Set<UserGroupPermissionEntity> userGroupPermissionEntities = userGroupPermissionRepository.getAll();
        Set<PermissionsEntity> permissionsEntities = permissionRepository.getAll();
        int countGroup = userGroupPermissionEntities.size();
        int countPermission = countGroup > 0 ? permissionsEntities.size() / countGroup : 0;

        if (countGroup == PermissionsGroup.values().length && countPermission == Permission.values().length) {
            log.info("Permission Init");
        } else {

            for (PermissionsGroup permissionsGroup : PermissionsGroup.values()) {
                if (countGroup < PermissionsGroup.values().length && userGroupPermissionRepository.getByGroupName(permissionsGroup.name()).isEmpty()) {
                    UserGroupPermissionEntity userGroupPermission = new UserGroupPermissionEntity();
                    userGroupPermission.setGroupName(permissionsGroup.name());
                    userGroupPermission.setPermissionList(new HashSet<>());
                    for (Permission permission : Permission.values()) {
                        PermissionsEntity permissionsEntity = new PermissionsEntity();
                        permissionsEntity.setPermission(permission.name());
                        userGroupPermission.getPermissionList().add(permissionsEntity);
                    }
                    userGroupPermissionRepository.save(userGroupPermission);
                } else {
                    UserGroupPermissionEntity userGroupPermission = userGroupPermissionRepository.getByGroupName(permissionsGroup.name()).get();
                    if (countPermission < Permission.values().length) {
                        for (Permission permission : Permission.values()) {
                            if (userGroupPermission.getPermissionList().stream().noneMatch(e -> e.getPermission().equals(permission.name()))) {
                                PermissionsEntity permissionsEntity = new PermissionsEntity();
                                permissionsEntity.setPermission(permission.name());
                                userGroupPermission.getPermissionList().add(permissionsEntity);
                            }
                        }
                        userGroupPermissionRepository.save(userGroupPermission);
                    }
                }
            }
            log.info("Permission Init");
        }
    }


}
