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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map((order) =>(
          <tr key={order._id}>
            <td>{order.name}</td>
            <td>Rs {order.orderAmount} /-</td>
            <td><div className='text-left w-100 m-1'>
                    <h2 style={{fontSize:'25px'}}>Items</h2>
                    {order.orderItems.map(item=>{
                        return <div>
                            <h1>{item.name} [{item.varient}]*{item.quantity}*{item.price}</h1>
                        </div>
                    })}
                </div></td>
            <td>{order.createdAt.substring(0,10)}</td>
            <td>{order.isDelivered ? (<h6 className='text-success'>Delivered</h6>):(<>
              <Button className='btn-danger' onClick={()=>{
              dispatch(deliveredOrders(order._id))
            }}>Delivered</Button></>)}{" "}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}
