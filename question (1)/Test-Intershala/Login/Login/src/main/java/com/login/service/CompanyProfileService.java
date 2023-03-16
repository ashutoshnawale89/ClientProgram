package com.login.service;

import com.login.DTO.CompanyDTO;
import com.login.model.CompanyProfile;
import com.login.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompanyProfileService implements CompanyProfeServiceImpl {
@Autowired
    private CompanyRepository companyRepository;
    @Override
    public CompanyProfile create(CompanyDTO companyDTO) {
        CompanyProfile companyProfile=new CompanyProfile(companyDTO);
        companyRepository.save(companyProfile);
        return companyProfile;
    }

    @Override
    public List<CompanyProfile> getAllCompanyProfileList() {
        List<CompanyProfile> getCompanyData=companyRepository.findAll();
        return getCompanyData;
    }

    @Override
    public CompanyProfile updateRecordById(CompanyDTO companyDTO, int id) {
        CompanyProfile companyProfile=new CompanyProfile(companyDTO,id);
        companyRepository.save(companyProfile);
        return companyProfile;
    }

    @Override
    public List<CompanyProfile> searchByName(String name) {
        String name1 = name.toLowerCase();
        List<CompanyProfile> companyData = getAllCompanyProfileList();
        List<CompanyProfile> collect = companyData.stream()
                .filter(companyDataData -> companyDataData.getCompanyName().toLowerCase().contains(name1))
                .collect(Collectors.toList());
        return collect;
    }

    @Override
    public CompanyProfile deleteRecord(int id)  {
        Optional<CompanyProfile> companyProfile = companyRepository.findById(id);
        if (companyProfile.isPresent()) {
            companyRepository.deleteById(id);
            return companyProfile.get();

        } else {
            return null;

        }
    }

    @Override
    public CompanyProfile getModelById(int id) throws Exception {
        return (CompanyProfile) companyRepository.findByClientId(id)
                .orElseThrow(() -> new Exception("ID not found In the List"));
    }

}

