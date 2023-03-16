import ViewClientDashboard from "./components/ViewClientDashboard";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const ViewClient = () => {
    return (
        <div>
            <Navbar/>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
          <ViewClientDashboard/> 
        
     </div>
    </div> 
        </div>
    )
}
export default ViewClient
