package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class WrongPasswordException extends RuntimeException {
    private final String message;

    public WrongPasswordException() {
        this.message = "Wrong Password";
    }
}
