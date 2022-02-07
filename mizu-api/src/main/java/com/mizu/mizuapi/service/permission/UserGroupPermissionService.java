package com.mizu.mizuapi.service.permission;

import com.mizu.mizuapi.dto.UserGroupPermissionDTO;

import java.util.Set;

public interface UserGroupPermissionService {
    Set<UserGroupPermissionDTO> getAll();
}
