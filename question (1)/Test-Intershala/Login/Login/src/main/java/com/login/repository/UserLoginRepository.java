package com.login.repository;

import com.login.model.UserLoginModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLoginModel,Integer> {

    UserLoginModel findByEmail(String email);
}
