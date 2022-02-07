package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class EmailOrPasswordIsIncorrectException extends RuntimeException {
    private final String message;

    public EmailOrPasswordIsIncorrectException() {
        this.message = "Email or password is incorrect";
    }
}
