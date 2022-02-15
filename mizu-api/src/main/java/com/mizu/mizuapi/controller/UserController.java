package com.mizu.mizuapi.controller;

import com.mizu.mizuapi.config.ProducerConfig;
import com.mizu.mizuapi.domain.user.UserEntity;
import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.generic.crud.GenericCRUDController;
import com.mizu.mizuapi.helper.UserProvider;
import com.mizu.mizuapi.helper.UserProviderImpl;
import com.mizu.mizuapi.repository.UserRepository;
import com.mizu.mizuapi.request.EmailRequest;
import com.mizu.mizuapi.service.email.EmailService;
import com.mizu.mizuapi.service.user.impl.UserServiceImpl;
import com.mizu.mizuapi.service.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.persistence.EntityManager;
import java.util.List;


@RestController
@RequestMapping("/api/user")
@CrossOrigin(originPatterns = "*", maxAge = 3600)
public class UserController extends GenericCRUDController<UserEntity, UserDTO> {

    @Autowired
    private UserProvider userProvider;
    @Autowired
    private EmailService emailService;
    private final UserServiceImpl userService;

    @Autowired
    ProducerConfig producerConfig;

    public UserController(UserRepository userRepository, UserMapper mapper, UserServiceImpl userService, EntityManager em) {
        super(userRepository, mapper, em, UserEntity.class);
        this.userService = userService;
    }

    @PostMapping("/group")
    public List<UserDTO> getAllByUserGroups(@RequestBody String[] userGroups) {
        return userService.getAllByUserGroups(userGroups);
    }

    @GetMapping("/logged")
    public UserDTO getLoggedUser() {
        return userProvider.getUser();
    }

    @PutMapping("/update")
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.updateUser(userDTO));
    }

    @PutMapping("/update/password")
    public ResponseEntity<UserDTO> updateUserPassword(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.updateUserPassword(userDTO));
    }

    @PutMapping("/update/password/matches")
    public ResponseEntity<UserDTO> doesPasswordMatch(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.doesPasswordMatch(userDTO));
    }

    @PostMapping("/email")
    public ResponseEntity<EmailRequest> sendEmail(@RequestBody EmailRequest emailRequest) {
        return ResponseEntity.ok(emailService.sendEmail(emailRequest));
    }

    @GetMapping("/kafka/{message}")
    public void sendMessage(@PathVariable String message) {
        producerConfig.sendMessage(message);
    }
}
