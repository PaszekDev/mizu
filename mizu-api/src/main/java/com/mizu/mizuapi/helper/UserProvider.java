package com.mizu.mizuapi.helper;

import com.mizu.mizuapi.dto.UserDTO;

public interface UserProvider {
    String getSessionKey();

    UserDTO getUser();

    Long getUserId();
}
