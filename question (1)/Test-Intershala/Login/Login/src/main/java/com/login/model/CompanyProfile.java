package com.login.model;

import com.login.DTO.CompanyDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Entity
@Data@NoArgsConstructor
@Table(name="clientprofile")
public class CompanyProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int clientId;

    private String logo;
    private String companyName;
    private String website;
    private String buisinessCategory;
    private String emailAddress;
    private String mobileNumber;
    private String state;
    private String city;
    private String gstNumber;

    private String contactPerson;
    private String sites;
    private String billingAddress;
    private String billingAddressState;
    private String billingAddressCity;
    private String billingAddressPincode;
    private String discount;
    private String reason;
    private String paymentMode;
    private String paymentSetup;
    private String payableAmountPerSites;
    private String totalAmount;


    public CompanyProfile(CompanyDTO companyDTO) {
        this.billingAddress= companyDTO.billingAddress;
        this.billingAddressState=companyDTO.billingAddressState;
        this.billingAddressCity= companyDTO.billingAddressCity;
        this.billingAddressPincode=companyDTO.billingAddressPincode;
        this.discount= companyDTO.discount;
        this.reason=companyDTO.reason;
        this.paymentMode= companyDTO.paymentMode;
        this.paymentSetup=companyDTO.paymentSetup;
        this.payableAmountPerSites=companyDTO.payableAmountPerSites;
        this.totalAmount=companyDTO.totalAmount;
        this.companyName = companyDTO.companyName;
        this.website = companyDTO.website;
        this.buisinessCategory = companyDTO.buisinessCategory;
        this.emailAddress = companyDTO.emailAddress;
        this.mobileNumber = companyDTO.mobileNumber;
        this.state = companyDTO.state;
        this.city = companyDTO.city;
        this.gstNumber = companyDTO.gstNumber;
        this.sites = companyDTO.sites;
        this.contactPerson = companyDTO.contactPerson;
        this.logo=companyDTO.logo;
    }

    public CompanyProfile(CompanyDTO companyDTO, int id) {
        this.companyName = companyDTO.companyName;
        this.website = companyDTO.website;
        this.buisinessCategory = companyDTO.buisinessCategory;
        this.emailAddress = companyDTO.emailAddress;
        this.mobileNumber = companyDTO.mobileNumber;
        this.state = companyDTO.state;
        this.city = companyDTO.city;
        this.gstNumber = companyDTO.gstNumber;
        this.sites = companyDTO.sites;
        this.contactPerson = companyDTO.contactPerson;
        this.logo=companyDTO.logo;
        this.clientId=id;
        this.billingAddress= companyDTO.billingAddress;
        this.billingAddressState=companyDTO.billingAddressState;
        this.billingAddressCity= companyDTO.billingAddressCity;
        this.billingAddressPincode=companyDTO.billingAddressPincode;
        this.discount= companyDTO.discount;
        this.reason=companyDTO.reason;
        this.paymentMode= companyDTO.paymentMode;
        this.paymentSetup=companyDTO.paymentSetup;
        this.payableAmountPerSites=companyDTO.payableAmountPerSites;
        this.totalAmount=companyDTO.totalAmount;
    }
}
