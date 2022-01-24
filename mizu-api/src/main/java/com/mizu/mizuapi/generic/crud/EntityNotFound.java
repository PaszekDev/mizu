package com.mizu.mizuapi.generic.crud;

import lombok.Getter;

@Getter
public class EntityNotFound extends RuntimeException {
    private final String message;

    public EntityNotFound() {
        this.message = "Entity not found";
    }
}
