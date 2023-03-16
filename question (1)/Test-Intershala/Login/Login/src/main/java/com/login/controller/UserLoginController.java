package com.login.controller;

import com.login.DTO.ResponseDTO;
import com.login.DTO.UserLoginDTO;
import com.login.model.UserLoginModel;
import com.login.service.UserLoginService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin( allowedHeaders = "*", origins = "*")
@RequestMapping("/reqres.in/api")
@RestController
public class UserLoginController {

    @Autowired
    private UserLoginService userService;

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> adminRegistration(@Valid @RequestBody UserLoginDTO userLoginDTO) {
        UserLoginModel userData = userService.registerUser(userLoginDTO);
        ResponseDTO respDTO = new ResponseDTO("Admin created successfully.....",userData);
        return new ResponseEntity(respDTO, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> userLogin(@Valid @RequestBody UserLoginDTO userLoginDTO) {
        ResponseDTO respDTO = userService.loginUser(userLoginDTO);
        return new ResponseEntity(respDTO, HttpStatus.OK);
    }
}
