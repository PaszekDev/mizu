package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class SessionNotFound extends RuntimeException {
    private final String message;

    public SessionNotFound() {
        this.message = "Session Not Found, Invalid Key";
    }
}
