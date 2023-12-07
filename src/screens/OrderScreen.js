import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserOrders } from '../actions/OrderActions'
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getUserOrderReducer } from '../Reducers/orderReducer'
import { NavLink } from 'react-router-dom';
import FullOrderInfo from './FullOrderInfo';
import MapOrders from './MapOrders';
// import { getUserOrders } from '../actions/OrderActions';
export default function OrderScreen() {
    const dispatch=useDispatch();
    const orderstate=useSelector(state=>state.getUserOrderReducer)
    const {orders,error,loading}=orderstate;
    useEffect(()=>{
        dispatch(getUserOrders())
    },[])
  return (
    <>
    
      <div className='row'>
      <hr></hr>
      {loading && (<Loading/>)}
        {error && (<Error error="something went wrong"/>)}
        {orders && orders.map((order)=>{
           return (
            <div>
              <div style={{ margin: "-8px" }}>
                <MapOrders order={order}/>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  )
}
