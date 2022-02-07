package com.mizu.mizuapi.service.permission.mapper;

import com.mizu.mizuapi.domain.user_group_permission.UserGroupPermissionEntity;
import com.mizu.mizuapi.dto.UserGroupPermissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class UserGroupPermissionMapper {
    @Autowired
    private PermissionMapper permissionMapper;

    public UserGroupPermissionEntity fromDto(UserGroupPermissionDTO dto) {
        return UserGroupPermissionEntity.builder()
                .groupName(dto.getGroupName())
                .id(dto.getId())
                .permissionList(dto.getPermissionList() != null ? dto.getPermissionList().stream().map(permissionMapper::fromDto).collect(Collectors.toSet()) : null)
                .build();
    }

    public UserGroupPermissionDTO toDto(UserGroupPermissionEntity entity) {
        return UserGroupPermissionDTO.builder()
                .groupName(entity.getGroupName())
                .id(entity.getId())
                .permissionList(entity.getPermissionList() != null ? entity.getPermissionList().stream().map(permissionMapper::toDto).collect(Collectors.toSet()) : null)
                .build();
    }
}
