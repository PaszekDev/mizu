package com.mizu.mizuapi.service.user;

import com.mizu.mizuapi.dto.UserDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface UserService {

    Page<UserDTO> getAllByUserGroup(Pageable pageable, String userGroup);

    UserDTO getUserBySessionKey(String sessionKey);

    UserDTO getLastUserByIndex();

    UserDTO updateUser(UserDTO userDTO);

    UserDTO updateUserPassword(UserDTO userDTO);

    List<UserDTO> getAllByUserGroups(String[] userGroups);

    UserDTO doesPasswordMatch(UserDTO userDTO);
}
