package com.login.model;

import com.login.DTO.UserLoginDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_login")
public class UserLoginModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userId")
    private Integer userId;
    private String email;
    private String password;

    public UserLoginModel(UserLoginDTO userLoginDTO) {
        this.userId = userId;

        this.email = userLoginDTO.email;
        this.password = userLoginDTO.password;
    }

}
