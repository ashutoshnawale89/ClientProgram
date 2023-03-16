import React from 'react';
import ViewClient from './ViewClient';
import AddClient from './AddClient';
import { Route, Routes} from "react-router-dom";
import LoginForm from './components/LoginForm';
import ViewDetails from './components/ViewDetails';

 
function App(){
 
        return (
            <div>
                 <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/home' element={<ViewClient/>}/>
            <Route path='/form' element={<AddClient/>}/>
            <Route path="/home/form/:id" element={<AddClient />}></Route>
            <Route path="/home/view/:id" element={<ViewDetails />}></Route>
            <Route path="/view" element={<ViewDetails />}></Route>


        </Routes>
        </div>  
        );
    }
  
export default App
