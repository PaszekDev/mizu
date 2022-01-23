package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class UsernameOrEmailAlreadyTakenException extends RuntimeException {
    private final String message;

    public UsernameOrEmailAlreadyTakenException() {
        super();
        this.message = "Username or Email already taken";
    }
}
