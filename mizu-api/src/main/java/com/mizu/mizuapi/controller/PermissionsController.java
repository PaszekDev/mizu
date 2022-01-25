package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.domain.permission.PermissionsEntity;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.repository.PermissionsRepository;
import com.mizu.mizuapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/permissions")
@AllArgsConstructor
public class PermissionsController {

    private final UserRepository userRepository;
    private final PermissionsRepository permissionsRepository;

}
