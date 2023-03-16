package com.login.service;

import com.login.DTO.CompanyDTO;
import com.login.model.CompanyProfile;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CompanyProfeServiceImpl {
     CompanyProfile create(CompanyDTO companyDTO);

    List<CompanyProfile> getAllCompanyProfileList ();

    CompanyProfile updateRecordById(CompanyDTO companyDTO, int id);

    List<CompanyProfile> searchByName(String name);

    CompanyProfile deleteRecord(int id) throws Exception;

    CompanyProfile getModelById(int id) throws Exception;


}
