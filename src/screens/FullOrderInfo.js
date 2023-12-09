
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserOrders } from '../actions/OrderActions'
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getUserOrderReducer } from '../Reducers/orderReducer'
import { NavLink, useLocation } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
function FullOrderInfo({amount}) {
    const location =useLocation();
    let scolor=location.state.Dcolor;
  return (
    <>
      <div className='text-left w-100% m-1'>
      <div>
                   <div> <h2 style={{fontSize:'25px',backgroundColor:'orange'}}>ORDER Information</h2>
                    <h1> Name :{location.state.cname}</h1>
                    <h1> Mobile Number :{location.state.mNumber}</h1></div>
                    </div>
                    <hr></hr>
                    <h2 style={{fontSize:'25px'}}>Total Item List</h2>
                     {location.state.infoitem.map((item,index)=>{
                        return <div>
                            <h1 key={index}>{index+1}.{item.name}</h1> 
                        <div style={{display:'flex'}}>
                        <h1>Quantity x {item.quantity}</h1>
                        <h1>={item.price} /- RS</h1>
                        
                        </div>
                        </div>
                        
                     })}
                    <div>
                    <hr></hr>
                    <h2 style={{fontSize:'25px'}}>Total Bill And Date</h2>
                    <h1> Amount :{location.state.amount}</h1>
                    <h1> Date :{location.state.Date}</h1>
                    </div>
                    <div>
                    <hr></hr>
                    <h2 style={{fontSize:'25px'}}>Delivery Address</h2>
                    <h1> street :{location.state.street}</h1>
                    <h1> city :{location.state.city}</h1>
                    <h1> country :{location.state.country}</h1>
                    </div>
                    <div>
                        <hr></hr>
                    <h2 style={{fontSize:'25px'}}>Delivery status</h2>
                    <h1> Order Confirmation Status : <span style={{fontSize:'15px',fontWeight:'10px'}}>Confirmed Successfully</span></h1>
                    <h1 >Order Delivery Status:  <span style={{color:scolor}}>{location.state.Dstatus}</span></h1>
                    <ProgressBar animated now={location.state.track} variant={location.state.variant} label={`${location.state.now}`}/>
                    <div style={{display:'flex'}}>
                    <div style={{display:'flex',marginTop:"10px",width:'100%'}}><i class="fa-solid fa-truck" style={{fontSize:'30px'}}></i>
                    </div>
                    <div style={{display:'flex',marginTop:"10px",justifyContent:'end'}}><i class="fa-solid fa-people-carry-box" style={{fontSize:'30px'}}></i></div>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default FullOrderInfo
