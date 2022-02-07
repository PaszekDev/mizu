package com.mizu.mizuapi.service.permission.mapper;

import com.mizu.mizuapi.domain.permission.PermissionsEntity;
import com.mizu.mizuapi.dto.PermissionDTO;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import org.springframework.stereotype.Component;

@Component
public class PermissionMapper {

    private final UserMapper userMapper = new UserMapper();

    public PermissionsEntity fromDto(PermissionDTO permissionDTO) {
        return PermissionsEntity.builder()
                .id(permissionDTO.getId())
                .permission(permissionDTO.getPermission())
                .build();
    }

    public PermissionDTO toDto(PermissionsEntity permissions) {
        return PermissionDTO.builder()
                .id(permissions.getId())
                .permission(permissions.getPermission())
                .build();
    }


}
