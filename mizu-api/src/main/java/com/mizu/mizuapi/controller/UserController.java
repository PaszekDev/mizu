package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDController;
import com.mizu.mizuapi.generic.crud.GenericCRUDService;
import com.mizu.mizuapi.generic.crud.GenericMapper;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class UserController  extends GenericCRUDController<UserEntity, UserDTO> {

    public UserController(UserRepository userRepository,UserMapper mapper) {
        super(userRepository,mapper);
    }
}
