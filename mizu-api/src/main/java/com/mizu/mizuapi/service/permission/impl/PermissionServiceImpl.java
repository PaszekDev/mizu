package com.mizu.mizuapi.service.permission.impl;

import com.mizu.mizuapi.dto.PermissionDTO;
import com.mizu.mizuapi.repository.PermissionsRepository;
import com.mizu.mizuapi.service.permission.PermissionService;
import com.mizu.mizuapi.service.permission.mapper.PermissionMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PermissionServiceImpl implements PermissionService {

    private final PermissionsRepository permissionsRepository;
    private final PermissionMapper permissionMapper;

    @Override
    public Set<PermissionDTO> getAllPermissions() {
        return permissionsRepository.getAll().stream().map(permissionMapper::toDto).collect(Collectors.toSet());
    }
}
