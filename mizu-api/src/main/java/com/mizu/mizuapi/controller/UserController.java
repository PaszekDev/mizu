package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.domain.permission.PermissionsGroup;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.exception.EnumValueNotFound;
import com.mizu.mizuapi.generic.crud.GenericCRUDController;
import com.mizu.mizuapi.helper.UserProvider;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.service.user.impl.UserServiceImpl;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import liquibase.repackaged.org.apache.commons.lang3.EnumUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import java.util.Locale;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class UserController extends GenericCRUDController<UserEntity, UserDTO> {

    @Autowired
    private UserProvider userProvider;
    private final UserServiceImpl userService;

    public UserController(UserRepository userRepository, UserMapper mapper, UserServiceImpl userService) {
        super(userRepository,mapper);
        this.userService = userService;
    }

    @GetMapping("/group/{userGroup}")
    public Page<UserDTO> getAllByUserGroup(Pageable pageable, @PathVariable String userGroup) {
        if (EnumUtils.isValidEnum(PermissionsGroup.class, userGroup.toUpperCase(Locale.ROOT))) {
            return userService.getAllByUserGroup(pageable, userGroup);
        }
        throw new EnumValueNotFound();
    }

}
