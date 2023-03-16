package com.login.exception;

import com.login.DTO.ResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LoginExceptionHandler {


    /**
     * @Purpose : User Friendly Errors in case person Id is not found
     */
    @ExceptionHandler(LoginException.class)
    public ResponseEntity<ResponseDTO> handleMethodBookstoreException(LoginException exception) {
        ResponseDTO responseDTO = new ResponseDTO("Exception While processing REST Request", exception.getMessage());
        return new ResponseEntity<>(responseDTO, HttpStatus.BAD_REQUEST);
    }
}
