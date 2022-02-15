package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class EmailSenderException extends RuntimeException {
    private final String message;

    public EmailSenderException() {
        super();
        this.message = "Couldn't send email";
    }
}
