import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import StepContent from '@mui/material/StepContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import "./AddClient.css";
import ClientService from "../Services/ClientService";
import { useNavigate } from 'react-router-dom';
import { useParams,Link } from "react-router-dom";



const AddClientDashboard =(props)=>{

  const navigate=useNavigate();
    
  const [activeStep, setActiveStep] = useState(0);
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
    isUpdate: false,
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
      isUpdate: true,
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


    const changeValue = (event) => {
        console.log(event.target);
        console.log(event.target.name);
        setForm({ ...formValue, [event.target.name]: event.target.value });
      };

      const save = async (event) => {
        event.preventDefault();
        let object = {
          companyName: formValue.companyName,
          website: formValue.website,
          buisinessCategory: formValue.buisinessCategory,
          emailAddress: formValue.emailAddress,
          state: formValue.state,
          city: formValue.city,
          mobileNumber: formValue.mobileNumber,
          sites: formValue.sites,
          gstNumber: formValue.gstNumber,
          contactPerson: formValue.contactPerson,
          logo: formValue.logo,
          billingAddress: formValue.billingAddress,
          billingAddressState: formValue.billingAddressState,
          billingAddressCity: formValue.billingAddressCity,
          billingAddressPincode: formValue.billingAddressPincode,
          discount: formValue.discount,
          reason: formValue.reason,
          paymentMode: formValue.paymentMode,
          paymentSetup: formValue.paymentSetup,
          payableAmountPerSites: formValue.billingAddressState,
          totalAmount: formValue.totalAmount,
        };
    
        console.log(object);
          

            ClientService.addClient(object)
            .then((response) => {
              console.log(response);
              const data = response.data.data;
              console.log(data);
              alert("Data Added successfully!!");
              navigate("/home");
            })
            .catch((error) => {
              console.log("WARNING!! Error while adding the data!", error);
            });
            reset();
        }
      
    

      const reset = () => {
      }

  const handleNextCheckCartisEmpty = () => {
    
}

const handleBack = () => {

    if (activeStep > 0) {
        setActiveStep(activeStep - 1);
    }
};
const handleNext = () => {

  if (activeStep <= 4) {
  
          setActiveStep(activeStep + 1);
     
  }
};

const onValueChange = (event) => {
}


    return (
        <div class="col main pt-5 mt-3">2
         
        <nav aria-label="breadcrumb">
            <div class="text-uppercase">Add Clients</div>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Client Master</a></li>
            <li class="breadcrumb-item active" aria-current="page">Add Clients</li>
        </ol>
        </nav>
        <div class="row ">
            <div class="col-lg-12 col-md-6 col-sm-12">


            <Container>
                        <Stepper activeStep={activeStep} orientation='horizontal'>
                            <Step>
                                <StepLabel>01 Create Profile</StepLabel>

                                <StepContent>
                                
                               
          <Box >
          <div className="row-content">
              <input className="input" type="text" name="companyName" id="companyName" placeholder="Company Name.."  required  value={formValue.companyName} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="website" id="website" placeholder="Website.." required  value={formValue.website} onChange={changeValue}/>

            </div>
            </div>

            <div className="row-content">
              <input className="input" type="text" name="buisinessCategory" id="buisinessCategory" placeholder="Buisiness Categories.." required  value={formValue.buisinessCategory} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="emailAddress" id="emailAddress" placeholder="Email Address .." required  value={formValue.emailAddress} onChange={changeValue}/>

            </div>
            </div>

            <div className="row-content">
              <input className="input" type="text" name="state" id="state" placeholder="State.." required  value={formValue.state} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="city" id="city" placeholder="City.." required  value={formValue.city} onChange={changeValue}/>
            </div>
            </div>
            
            
            

            <div className="row-content">
              <input className="input" type="text" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number.." required  value={formValue.mobileNumber} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="gstNumber" id="gstNumber" placeholder="GST NUmber.." required  value={formValue.gstNumber} onChange={changeValue}/>

            </div>
            </div>

            <div className="row-content">
              <input className="input" type="text" name="sites" id="sites" placeholder="Sites.." required  value={formValue.sites} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="contactPerson" id="contactPerson" placeholder="Contact Person Name.." required  value={formValue.contactPerson} onChange={changeValue}/>

            </div>
            </div>

            <div className="row-content">
              <input className="input" type="text" name="logo" id="logo" placeholder="logo Link.." required  value={formValue.logo} onChange={changeValue}/>
            </div>
          

            <div className="buttonParent"> 
               <Button type='submit' style={{backgroundColor:"green",fontWeight:"bold",color:"black"}} onClick={handleNext} >{formValue.isUpdate ? "Update" : "Save & Continue" }</Button>
            </div>
            
          </Box>  
       

                             </StepContent>
                             </Step>

                             <Step>
                                <StepLabel>02 Payment Setup</StepLabel>

                                <StepContent>
                                <Box>
                         
    
   
          <div className="row-content">
              <input className="input" type="text" name="billingAddress" id="billingAddress" placeholder="Billing Address.." required  value={formValue.billingAddress} onChange={changeValue}/>
              <div className="row-content">
              <input className="input" type="text" name="billingAddressState" id="billingAddressState" placeholder="Billing Address State.." required  value={formValue.billingAddressState} onChange={changeValue}/>
            </div>
            </div>
            

            <div className="row-content">
              <input className="input" type="text" name="billingAddressCity" id="billingAddressCity" placeholder="Billing Address City.." required  value={formValue.billingAddressCity} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="billingAddressPincode" id="billingAddressPincode" placeholder="Billing Address Pincode .." required  value={formValue.billingAddressPincode} onChange={changeValue}/>

            </div>
            </div>
           

            <div className="row-content">
              <input className="input" type="text" name="discount" id="discount" placeholder="Discount.." required  value={formValue.discount} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="reason" id="reason" placeholder="Reason.." required  value={formValue.reason} onChange={changeValue}/>

            </div>
            </div>

            <div className="row-content">
              <input className="input" type="text" name="paymentMode" id="paymentMode" placeholder="PaymentMode.." required  value={formValue.paymentMode} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="paymentSetup" id="paymentSetup" placeholder="Payment Setup.." required  value={formValue.paymentSetup} onChange={changeValue}/>

            </div>
            </div>

            <div className="row-content">
              <input className="input" type="text" name="payableAmountPerSites" id="payableAmountPerSites" placeholder="Payable Amount Per Sites.." required  value={formValue.payableAmountPerSites} onChange={changeValue}/>
              <div className="row-content2">
              <input className="input" type="text" name="totalAmount" id="totalAmount" placeholder="Total Amount.." required  value={formValue.totalAmount} onChange={changeValue}/>

            </div>
            </div>


            <div className="buttonParent"> 
                <Button type="submit" style={{backgroundColor:"green",fontWeight:"bold",color:"black"}}  onClick={handleNext} >{formValue.isUpdate ? "Update" : "Save & Continue" }</Button>
                <Button type="reset" style={{backgroundColor:"green",fontWeight:"bold",color:"black"}} onClick={handleBack} >Back</Button>
            </div>
            
          
                                    </Box>
                             </StepContent>
                             </Step>

                             <Step>
                                <StepLabel>03 Module Setup</StepLabel>

                                <StepContent>
                                <Box>
                                <FormGroup>

                                <div className="row-content">
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Home/Dashboard" />
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="HelpDesk" />
                                  <div className="row-content2">
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Assets" />
                                  </div>
                                 </div>
                                 <div className="row-content">
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Daily Task" />
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="PPM" />
                                  <div className="row-content2">
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Employees" />
                                  </div>
                                 </div>
                                 <div className="row-content">
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Profile" />
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Transaction" />
                                  <div className="row-content2">
                                  <FormControlLabel control={<Checkbox/>} style={{margin:"1px"}} label="Summary" />
                                  </div>
                                 </div>
                                </FormGroup>

                                <div className="buttonParent"> 
                <Button type="submit" style={{backgroundColor:"green",fontWeight:"bold",color:"black"}}  onClick={save} >{formValue.isUpdate ? "Update" : "Save" }</Button>
                <Button type="reset" style={{backgroundColor:"green",fontWeight:"bold",color:"black",marginLeft:"40px"}} onClick={handleBack} >Back</Button>
            </div>

                                    </Box>
                             </StepContent>
                             </Step>

           </Stepper>
           </Container>
            </div>
            </div>
            </div>
    )
}
export default AddClientDashboard;