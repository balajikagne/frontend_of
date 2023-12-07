import React from 'react'
import {NavLink} from 'react-router-dom';
import { Row,Col,Container} from 'react-bootstrap'
import {ButtonGroup,Button} from 'react-bootstrap';
import { loginUserReducer } from "../Reducers/UserReducer";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { deliveredOrders, getALLOrders } from '../actions/OrderActions';
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { allOrdersReducer } from '../Reducers/orderReducer';
import {Table} from 'react-bootstrap'
export default function Orderlist() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  const allordersState=useSelector(state=>state.allOrdersReducer)
  const {loading,error,orders}=allordersState
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getALLOrders()) 
  },[dispatch])
  // console.log(orders)  
  return (
    <div>
       <h4 className='bg-dark text-light p-2 w-100'>Admin panel</h4>
       <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
          
      <Container>
      <Row>
        <Col md={4}>
        <ButtonGroup horizontal>
      {/* <Button><NavLink style={{textDecoration:'none'}} to='/admin/userlist'>All Users</NavLink></Button> */}
      <Button><NavLink style={{textDecoration:'none'}} to='/admin/itemlist'>All Item</NavLink></Button>
      <Button><NavLink style={{textDecoration:'none'}} to='/admin/addnewitem'>AddNewItem</NavLink></Button>
      <Button><NavLink style={{textDecoration:'none'}} to='/admin/orderlist'>Orderlist</NavLink></Button>
    </ButtonGroup>
        </Col>
        <Col md={8}>
        </Col>
      </Row>
      </Container>
    </div>

    <div>
     <h4>Order List</h4>
     {loading && <Loading />}
      {error && <Error error="Something went wrong" />}      
    </div>
    
      <div>
        {orders && orders.map((order) =>(
          <div style={{display:'flex', textAlign:'start'}}>
            <div style={{display:'inline',width:'100%'}}>
            <hr></hr>
            <h1>Name:{order.name}</h1>
            <h1>ORDER Amount :Rs {order.orderAmount} /-</h1>
            <h1>Items List :{order.orderItems.map(item=>{
                        return <div>
                            <h1>{item.name} [{item.varient}]*{item.quantity}*{item.price}</h1>
                        </div>
                    })}</h1>
            <h1>Data :{order.createdAt.substring(0,10)}</h1>
            <h1 style={{color:'blue'}}>Delivery Address :{order.shippingAddress.street}</h1>
            <h1 style={{fontSize:'20px'}}>City :{order.shippingAddress.city}</h1>
            <h1>{order.isDelivered ? (<h6 className='text-success'>Delivered</h6>):(<>
              <Button className='btn-danger' onClick={()=>{
              dispatch(deliveredOrders(order._id))
            }}>Delivered</Button></>)}{" "}</h1>
            <div style={{marginTop:'20px',marginBottom:'10px'}}><a href="tel:+91"+{order.mobNumber} style={{color:'black',textDecoration:'none' }}><i class="fa-solid fa-phone" style={{fontSize:'20px',paddingRight:'10px'}}></i>Customer Number</a></div>
            
            </div>
          </div>
        )).reverse()}
      </div>
    
    </div>
  )
}
