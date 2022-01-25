package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
@AllArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PostMapping("/create")
    UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }
}
