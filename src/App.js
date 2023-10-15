
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
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
