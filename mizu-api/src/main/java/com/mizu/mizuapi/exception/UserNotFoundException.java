package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException {
    private final String message;

    public UserNotFoundException() {
        this.message = "Username or password not found";
    }
}
