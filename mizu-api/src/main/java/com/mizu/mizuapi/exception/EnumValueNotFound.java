package com.mizu.mizuapi.exception;

import lombok.Getter;

@Getter
public class EnumValueNotFound extends RuntimeException {
    private final String message;

    public EnumValueNotFound() {
        this.message = "Enum value not found";
    }
}
