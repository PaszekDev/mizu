package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.dto.UserGroupPermissionDTO;
import com.mizu.mizuapi.service.permission.PermissionService;
import com.mizu.mizuapi.service.permission.UserGroupPermissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/permissions")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
@AllArgsConstructor
public class PermissionsController {

    private PermissionService permissionService;
    private UserGroupPermissionService userGroupService;

    @GetMapping
    Set<UserGroupPermissionDTO> getAllPermissions() {
        return userGroupService.getAll();
    }

}
