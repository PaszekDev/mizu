package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class UserWithSessionNotFound extends RuntimeException {
    private final String message;

    public UserWithSessionNotFound() {
        this.message = "User with this session key not found";
    }
}
