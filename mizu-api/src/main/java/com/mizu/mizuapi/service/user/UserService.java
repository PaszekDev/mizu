package com.mizu.mizuapi.service.user;

import com.mizu.mizuapi.dto.UserDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface UserService {

    Page<UserDTO> getAllByUserGroup(Pageable pageable, String userGroup);

    UserDTO getUserBySessionKey(String sessionKey);

    UserDTO getLastUserByIndex();
}
