import React from 'react';
import MenuItem from '@mui/material/MenuItem';
 
export const Navbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">360 Solutionfor assets managments</a>
                   

                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <div style={{color:"whitesmoke", marginLeft:"120ex"}}><h6><MenuItem><div>{localStorage.length === 0 ?" " :localStorage.getItem("email") }</div></MenuItem></h6></div>
                    </li>

                    </ul>
                </div>
                
                
       </nav>
    )
}
export default Navbar