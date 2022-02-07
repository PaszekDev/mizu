package com.mizu.mizuapi.exception.handler;

import com.mizu.mizuapi.exception.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class ApiExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler(value = UsernameOrEmailAlreadyTakenException.class)
    public ResponseEntity<String> handleUsernameOrEmailAlreadyTakenException(UsernameOrEmailAlreadyTakenException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(value = UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = UserWithSessionNotFound.class)
    public ResponseEntity<String> handleUserWithSessionNotFoundException(UserWithSessionNotFound e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = SessionNotFound.class)
    public ResponseEntity<String> handleSessionNotFoundException(SessionNotFound e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = EmailOrPasswordIsIncorrectException.class)
    public ResponseEntity<String> handleEmailOrPasswordIsIncorrectException(EmailOrPasswordIsIncorrectException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
    }


}
