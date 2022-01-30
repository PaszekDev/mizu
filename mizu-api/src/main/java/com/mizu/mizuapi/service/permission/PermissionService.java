package com.mizu.mizuapi.service.permission;

import com.mizu.mizuapi.dto.PermissionDTO;

import java.util.Set;

public interface PermissionService {
    Set<PermissionDTO> getAllPermissions();
}
