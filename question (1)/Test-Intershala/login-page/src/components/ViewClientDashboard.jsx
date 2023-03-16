import {useEffect,useState} from 'react';
import { TextField } from '@mui/material';
import ClientService from "../Services/ClientService";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

 

function ViewClientDashboard()  {
   
   const navigate=useNavigate();
   const [clients, setClients] = useState([]);
 
  

   const fetchClientData =() =>{
    console.log(localStorage.length)
    if(localStorage.length===0){
      alert("Please Sign in")
    }else{
  ClientService.getAllClients().then(Response=>{
    console.log(Response.data.data);
    setClients(Response.data.data)
  });
}
   }
const handlerSearch = (event) => {
  event.preventDefault();
  let search = event.target.value;
  console.log(search);
  ClientService.searchByCompanyName(search).then((response) => {
      setClients(response.data.data)                  
      }) 
      .catch((response) => {
          
      });
};
    
  
 
useEffect(() => {
    
    fetchClientData();
    

},([]));

const remove=(id)=>{
  console.log(id);
          ClientService.deleteDataById(id)
            .then((data) => {
              
              window.location.reload();
              alert("Employee deleted successfully!!");
              fetchClientData();
            })
            .catch((error) => {
              console.log("Something Went Wrong!");
            });
}

const update =(id)=>{
  navigate(`form/${id}`)
}
const viewClient =(id)=>{
  console.log("Welcome");
  navigate(`view/${id}`)
}





    return (
        
    <div class="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb">
            <div class="text-uppercase">View Clients</div>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Client Master</a></li>
            <li class="breadcrumb-item active" aria-current="page">View Clients</li>
        </ol>
        </nav>
      
        <TextField id="outlined-basic" label="Search Clients" variant="outlined"  onChange={handlerSearch}/>
       
 
 
        
        
       
        <div class="row ">
            <div class="col-lg-12 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Employees
              </h5>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Company Name</th>
                                <th>Email Address</th>
                                <th>Phone No.</th>
                                <th>Contact Person</th>
                                <th>Facilator</th>
                                <th>Sites</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                         
                         {clients.map((output)=>
                            <tr>
                                <td> <img src={output.logo}
                                                    height={40}
                                                    width={45}
                                                    alt="Icon"/>
                                {output.companyName}</td>
                                <td>{output.emailAddress}</td>
                                <td>{output.mobileNumber}</td>
                                <td>{output.contactPerson}</td>
                                <td>{output.buisinessCategory}</td>
                                <td>{output.sites}</td>
                                <td>{output.city}</td>
                                <td>{output.state}</td>
                                <td>
                             <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Click
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => viewClient(output.clientId)}>View Details</MenuItem>
            <MenuItem onClick={() => update(output.clientId)}>Edit</MenuItem>
            <MenuItem onClick={() => remove(output.clientId)}>Delete</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
                                </td>
                                

                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
 
    </div>
    )
}
 
export default ViewClientDashboard