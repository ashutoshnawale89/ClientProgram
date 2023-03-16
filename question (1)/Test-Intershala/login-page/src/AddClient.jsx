import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddClientDashboard from './components/AddClientDashboard';

const AddClient = ()=>{
    return (
        <div>
            <Navbar/>
        <div class="container-fluid" id="main">
         <div class="row row-offcanvas row-offcanvas-left">
           <Sidebar/>
          <AddClientDashboard/>

        </div>
        </div>
        </div>
    )
}
export default AddClient;