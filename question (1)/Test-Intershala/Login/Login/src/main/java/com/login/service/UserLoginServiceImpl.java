package com.login.service;

import com.login.DTO.ResponseDTO;
import com.login.DTO.UserLoginDTO;
import com.login.model.UserLoginModel;

public interface UserLoginServiceImpl {
    ResponseDTO loginUser(UserLoginDTO userLoginDTO);


    UserLoginModel registerUser(UserLoginDTO userDTO);
}
