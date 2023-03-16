package com.login.controller;

import com.login.DTO.CompanyDTO;
import com.login.DTO.ResponseDTO;
import com.login.model.CompanyProfile;
import com.login.service.CompanyProfeServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin( allowedHeaders = "*", origins = "*")
@RequestMapping("/company")
@RestController
public class CompanyController {
    @Autowired
    private CompanyProfeServiceImpl companyProfeService;

    @GetMapping("/getAll")
    public ResponseEntity<ResponseDTO> getAllData() {
        List<CompanyProfile> listOfCompany = companyProfeService.getAllCompanyProfileList();
        ResponseDTO responseDto = new ResponseDTO("Data retrieved successfully :", listOfCompany);
        return new ResponseEntity(responseDto, HttpStatus.OK);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<ResponseDTO> getModelById(@PathVariable int id) throws Exception {
        CompanyProfile companyProfile = companyProfeService.getModelById(id);
        ResponseDTO responseDto = new ResponseDTO("Success Call for Id!!!", companyProfile);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<ResponseDTO> addUserInBookStore(@RequestBody CompanyDTO companyDTO) {
        CompanyProfile newCompany = companyProfeService.create(companyDTO);
        ResponseDTO responseDto = new ResponseDTO("Created the new book in book store", newCompany);
        return new ResponseEntity(responseDto, HttpStatus.CREATED);
    }

    @PutMapping("/updateById/{Id}")
    public ResponseEntity<ResponseDTO> updateRecordById(@PathVariable int Id, @Valid @RequestBody CompanyDTO companyDTO) {
        CompanyProfile updateRecord = companyProfeService.updateRecordById(companyDTO,Id);
        ResponseDTO responseDto = new ResponseDTO(" Book Record updated successfully by Id", updateRecord);
        return new ResponseEntity<>(responseDto, HttpStatus.ACCEPTED);
    }
    @GetMapping("/searchByName/{name}")
    public ResponseEntity<ResponseDTO> searchByName(@PathVariable String name ) {
        List<CompanyProfile> companyDataDataList = companyProfeService.searchByName(name);
        ResponseDTO respDTO = new ResponseDTO("Company are ....", companyDataDataList);
        return new ResponseEntity<>(respDTO, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseDTO> deleteRecordById(@PathVariable int id) throws Exception {
        CompanyProfile companyModel = companyProfeService.deleteRecord(id);
        ResponseDTO responseDto = new ResponseDTO("Record deleted successfully !", companyModel);
        return new ResponseEntity(responseDto, HttpStatus.ACCEPTED);
    }
}
