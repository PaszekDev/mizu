package com.mizu.mizuapi.helper;

import com.mizu.mizuapi.dto.UserDTO;
import com.mizu.mizuapi.exception.UserNotFoundException;
import com.mizu.mizuapi.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import javax.servlet.http.HttpServletRequest;

@Component
@RequestScope
public class UserProviderImpl implements UserProvider {

    private final String sessionKey;
    private final UserDTO userDTO;
    private UserService userService;

    public UserProviderImpl(HttpServletRequest httpServletRequest, @Autowired UserService userService) {
        this.sessionKey = httpServletRequest.getHeader("Authorization");
        this.userService = userService;
        this.userDTO = this.userService.getUserBySessionKey(this.sessionKey);

    }

    @Override
    public String getSessionKey() {
        return this.sessionKey;
    }

    @Override
    public UserDTO getUser() {
        if (userDTO != null) {
            return this.userDTO;
        }
        throw new UserNotFoundException();
    }

    @Override
    public Long getUserId() {
        if (userDTO != null) {
            return this.userDTO.getId();
        }
        throw new UserNotFoundException();
    }
}
