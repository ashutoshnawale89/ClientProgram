package com.login.repository;

import com.login.model.CompanyProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<CompanyProfile,Integer> {
    Optional<Object> findByClientId(int id);
}
