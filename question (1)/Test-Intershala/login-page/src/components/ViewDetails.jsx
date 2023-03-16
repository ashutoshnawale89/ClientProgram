import "./LoginForm.css";
import React, { useEffect , useState} from 'react';
import { useParams,Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ClientService from "../Services/ClientService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



const ViewDetails=(props)=>{
    const navigate=useNavigate();
    let initialValue = {
        companyName: "",
        website: "",
        buisinessCategory: "",
        emailAddress: "",
        state: "",
        city: "",
        mobileNumber: "",
        sites: "",
        gstNumber: "",
        contactPerson: "",
        logo: "",
        billingAddress: "",
        billingAddressState: "",
        billingAddressCity: "",
        billingAddressPincode: "",
        discount: "",
        reason: "",
        paymentMode: "",
        paymentSetup: "",
        payableAmountPerSites: "",
        totalAmount: "",
      };
    
      const [formValue, setForm] = useState(initialValue);
      const params = useParams();
    
      useEffect(() => {
        if (params.id) {
          getDataById(params.id);
        }
      }, [params.id]);
    
    
    
      const getDataById = (id) => {
        ClientService.getClientById(id)
          .then((response) => {
            let object = response.data.data;
            setData(object);
          })
          .catch((err) => {
            alert("err is ", err);
          });
      };
    
    
      const setData = (obj) => {
        let array = obj.startDate;
        console.log(array);
        console.log(obj);
    
        setForm({
          ...formValue,
          ...obj,
          id: obj.id,
          companyName: obj.companyName,
          website: obj.website,
          buisinessCategory: obj.buisinessCategory,
          emailAddress: obj.emailAddress,
          state: obj.state,
          city: obj.city,
          mobileNumber: obj.mobileNumber,
          sites: obj.sites,
          gstNumber: obj.gstNumber,
          contactPerson: obj.contactPerson,
          logo: obj.logo,
          billingAddress: obj.billingAddress,
          billingAddressState: obj.billingAddressState,
          billingAddressCity: obj.billingAddressCity,
          billingAddressPincode: obj.billingAddressPincode,
          discount: obj.discount,
          reason: obj.reason,
          paymentMode: obj.paymentMode,
          paymentSetup: obj.paymentSetup,
          payableAmountPerSites: obj.payableAmountPerSites,
          totalAmount: obj.totalAmount,
        });
      };
    
    
    
      

    return (
        <div>
        <Navbar/>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
        <div style={{textAlign:"center",border:"3px solid green",width:"100ex",marginTop:"100px",marginLeft:"250px",marginRight:"2px"}}>
             <div><h3 style={{fontWeight:"bold"}}>Client Details</h3></div>
             <img src={formValue.logo} alt="logo" style={{width:"100px",height:"100px"}}></img>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Comapany Name <h6>{formValue.companyName}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}}>Website <h6>{formValue.website}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Buisiness Category <h6>{formValue.buisinessCategory}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >EmailAddress <h6>{formValue.emailAddress}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >State <h6>{formValue.state}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >City <h6>{formValue.city}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Mobile Number <h6>{formValue.mobileNumber}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Sites <h6>{formValue.sites}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >GSTNumber<h6>{formValue.gstNumber}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Contact Person <h6>{formValue.contactPerson}</h6></div>         
             <div style={{border:"1px solid green" ,margin:"10px"}} >Billing Address <h6>{formValue.billingAddress}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Billing AddressState <h6>{formValue.billingAddressState}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >Billing AddressCity <h6>{formValue.billingAddressCity}</h6></div>
             <div style={{border:"1px solid green" ,margin:"10px"}} >BillingAddress Pincode<h6>{formValue.billingAddressPincode}</h6></div>

             </div>
             </div>
             </div>
            </div>
    )
}
export default ViewDetails;