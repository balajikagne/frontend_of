
import './App.css';

import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Menu from './screens/Homescreen'
import {BrowserRouter,Route,Link,Switch, Routes} from 'react-router-dom'
import cartScreen from './screens/cartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import 'bootstrap';
import AdminScreen from './screens/AdminScreen';
import Userlist from './Admin/Userlist';
import Orderlist from './Admin/Orderlist';
import AddNewItem from './Admin/AddNewItem';
import Itemlist from './Admin/Itemlist';
import EditeItem from './Admin/EditeItem';
import aboutUs from './screens/aboutUs';
import OrderScreen from './screens/OrderScreen';
import Checkout from './components/Checkout';
import FullOrderInfo from './screens/FullOrderInfo';
import Download from './components/Download';
import Profile from './screens/Profile';
import HelpLine from './screens/HelpLine';
import NotifyScreen from './screens/NotifyScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='App'>
    <Navbar/>
    <BrowserRouter>
    <Routes>
    {/* <Route path='/admin/userlist' Component={Userlist}></Route> */}
    <Route path='/admin/orderlist' Component={Orderlist}></Route>
    <Route path='/admin/addnewitem' Component={AddNewItem}></Route>
    <Route path='/admin/itemlist' Component={Itemlist}></Route>
      <Route path='/aboutus' Component={aboutUs}></Route>
    <Route path='/' exact Component={Menu}></Route>
    <Route path='/cart' exact Component={cartScreen}></Route>
    <Route path='/register' exact Component={RegisterScreen}></Route>
    <Route path='/login' exact Component={LoginScreen}></Route>
    <Route path='/orders' exact Component={OrderScreen}></Route>
    <Route path='/checkout' Component={Checkout}></Route>
    <Route path='/admin' Component={AdminScreen}></Route>
    <Route path='/oderfullinfo' Component={FullOrderInfo}></Route>
     <Route path='/download' Component={Download}></Route>
    <Route path='/profile' Component={Profile}></Route>
    <Route path='/helpline' Component={HelpLine}></Route>
    <Route path='/notify' Component={NotifyScreen}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer 
    position="top-center"  // Set the position to bottom center
    autoClose={3000}  // Adjust the auto-close duration in milliseconds (e.g., 3000 for 3 seconds)
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </div>
  );
}

export default App;
