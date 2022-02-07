package com.mizu.mizuapi.service.permission.impl;

import com.mizu.mizuapi.domain.permission.UserGroupPermissionRepository;
import com.mizu.mizuapi.dto.UserGroupPermissionDTO;
import com.mizu.mizuapi.service.permission.UserGroupPermissionService;
import com.mizu.mizuapi.service.permission.mapper.UserGroupPermissionMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserGroupPermissionServiceImpl implements UserGroupPermissionService {
    private final UserGroupPermissionRepository userGroupPermissionRepository;
    private final UserGroupPermissionMapper userGroupPermissionMapper;

    public Set<UserGroupPermissionDTO> getAll() {
        return userGroupPermissionRepository.getAll().stream().map(userGroupPermissionMapper::toDto).collect(Collectors.toSet());
    }
}
