import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserOrders } from '../actions/OrderActions'
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getUserOrderReducer } from '../Reducers/orderReducer'
// import { getUserOrders } from '../actions/OrderActions';
export default function OrderScreen() {
    const dispatch=useDispatch();
    const orderstate=useSelector(state=>state.getUserOrderReducer)
    const {orders,error,loading}=orderstate;
    useEffect(()=>{
        dispatch(getUserOrders())
    },[])
  return (
    <div>
      <h2 style={{fontSize:'35px'}}>My orders</h2>
      <div className='row'>
      {loading && (<Loading/>)}
        {error && (<Error error="something went wrong"/>)}
        {orders && orders.map((order)=>{
           return <div className='col-md-8'>
            <div className='flex-container'>
                <div className='text-left w-100 m-1'>
                    <h2 style={{fontSize:'25px'}}>Items</h2>
                    {order.orderItems.map(item=>{
                        return <div>
                            <h1>{item.name} [{item.varient}]*{item.quantity}*{item.price}</h1>
                        </div>
                    })}
                </div>
                <div className='text-left w-100 m-1'>
                    <h2 style={{fontSize:'25px'}}>Address</h2>
                    <h1> street :{order.shippingAddress.street}</h1>
                    <h1> city :{order.shippingAddress.city}</h1>
                    {/* <h1> country :{order.shippingAddress.country}</h1> */}
                    <h1> pincode :{order.shippingAddress.pincode}</h1>
                </div>
                <div style={{display:'flex',gap:'10px'}}>
                    <h2>Total Amount :{order.orderAmount}</h2>
                    <h2>Data :{order.createdAt.substring(0,10)}</h2>
                </div>
                </div>
                <br></br>
                <hr></hr>
           </div>
        })}
      </div>
    </div>
  )
}
