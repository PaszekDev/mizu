package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.dto.PermissionDTO;
import com.mizu.mizuapi.service.permission.PermissionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/permissions")
@AllArgsConstructor
public class PermissionsController {

    private PermissionService permissionService;

    @GetMapping
    Set<PermissionDTO> getAllPermissions() {
        return permissionService.getAllPermissions();
    }

}
