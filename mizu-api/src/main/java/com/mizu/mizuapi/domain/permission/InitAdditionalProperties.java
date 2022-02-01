package com.mizu.mizuapi.domain.permission;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.repository.PermissionsRepository;
import com.mizu.mizuapi.repository.SessionRepository;
import com.mizu.mizuapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
@Slf4j
@AllArgsConstructor
public class InitAdditionalProperties implements ApplicationRunner {

    private final PermissionsRepository permissionGroupRepository;
    private final SessionRepository sessionRepository;
    private final UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args) {
        initPermissions();
        initNewSessions();
    }

    private void initNewSessions() {
        List<UserEntity> userEntityList = userRepository.getAllWhereSessionIsNotNull();
        userEntityList.forEach(e -> {
            e.setSession(null);
            userRepository.save(e);
            sessionRepository.deleteSessionByUserId(e.getId());
        });
    }

    private void initPermissions() {
        Set<PermissionsEntity> permissionsEntities = permissionGroupRepository.getAll();
        for (UserGroup group : UserGroup.values()) {
            for (Permission permission : Permission.values()) {
                if (permissionsEntities.stream().noneMatch(e -> e.getGroupName().equals(group.name()) && e.getPermission().equals(permission.name()))) {
                    PermissionsEntity permissions = new PermissionsEntity();
                    permissions.setGroupName(group.name());
                    permissions.setPermission(permission.name());
                    permissionGroupRepository.save(permissions);
                }
            }
        }
    }
}
