package com.login.exception;

public class LoginException extends RuntimeException {



    public enum ExceptionType {
        EMAIL_NOT_FOUND,
        PASSWORD_INVALID,
        USER_NOT_FOUND,

    }

    public LoginException.ExceptionType type;


    public LoginException(String message, LoginException.ExceptionType type) {
        super(message);
        this.type = type;
    }

    public LoginException(String message) {
        super(message);
    }
}
