import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate=useNavigate();
  const view =()=>{
    navigate("/home");
  }
  const form =()=>{
    navigate("/form");
  }
  const logout=()=>{
    localStorage.removeItem("email");
    navigate("/");
    
  }
    return (
      
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">

                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Client Master</h5></a></li>
                
                  <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#" onClick={view}>View Clients</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#" onClick={form}>Add Clients++</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#" onClick={logout}>{localStorage.length === 0 ? 'Sign In' : 'Sign Out'}</a></li>
                

            </ul>
            
       </div>
    )
}
 
export default Sidebar