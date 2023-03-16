package com.login.service;

import com.login.DTO.ResponseDTO;
import com.login.DTO.UserLoginDTO;
import com.login.exception.LoginException;
import com.login.model.UserLoginModel;
import com.login.repository.UserLoginRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserLoginService implements UserLoginServiceImpl{

    @Autowired
    UserLoginModel userLoginData;

    @Autowired
    private UserLoginRepository userLoginRepository;
    @Autowired
    private TokenGenerator tokenGenerator;


    @Override
    public ResponseDTO loginUser(UserLoginDTO userLoginDTO) {
        UserLoginModel userData = userLoginRepository.findByEmail(userLoginDTO.getEmail());
        if (userData == null) {
            throw new LoginException("Enter Correct Email", LoginException.ExceptionType.EMAIL_NOT_FOUND);
        }
        else {
            if(userData.getPassword().equals(userLoginDTO.password)){
                String token=tokenGenerator.createToken(userLoginDTO.email);
                return new ResponseDTO("Logged in successfully","Token : "+token);
            }
            else{
                throw new LoginException("Please verify your Password",
                        LoginException.ExceptionType.PASSWORD_INVALID);
            }
        }
    }

    @Override
    public UserLoginModel registerUser(UserLoginDTO userDTO) {
        UserLoginModel userloginData =new UserLoginModel(userDTO);
        userLoginRepository.save(userloginData);
            System.out.println(userloginData);
            return userloginData;
    }
}
