package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDController;
import com.mizu.mizuapi.helper.UserProvider;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.service.user.impl.UserServiceImpl;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class UserController extends GenericCRUDController<UserEntity, UserDTO> {

    @Autowired
    private UserProvider userProvider;
    private final UserServiceImpl userService;

    public UserController(UserRepository userRepository, UserMapper mapper, UserServiceImpl userService) {
        super(userRepository, mapper);
        this.userService = userService;
    }

    @PostMapping("/group")
    public List<UserDTO> getAllByUserGroups(@RequestBody String[] userGroups) {
        return userService.getAllByUserGroups(userGroups);
    }

}
