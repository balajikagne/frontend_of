import React, { useState,useEffect } from 'react'
import FullOrderInfo from './FullOrderInfo'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { timers } from 'jquery';

function MapOrders({order}) {
    const[amount,setamount]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [time,settime]=useState(new Date())
    let Status;
    let track;
    let variant;
    let Dcolor;
    let now;
    function callme()
    {
        // console.log("hellow")
        if (order.isDelivered===true)
        {
            // console.log("hellow3")
            Status="Delivered Successfully";
            track=100;
            variant="success";
            Dcolor='green'
            now ='Delivered';
        }
        else{
            // console.log("hellow2")
            Status="Not Delivered"
            track=50
            variant="info"
            Dcolor='red'
            now ='Preparing For Delivery';
        }
        let amount=order.orderAmount;
        let array=order.orderItems
        let date=order.createdAt.substring(0,10);
        navigate("/oderfullinfo",{state:{orderId:order._id,IsDelivered:order.isDelivered,amount:amount,street:order.shippingAddress.street,city:order.shippingAddress.city,country:order.shippingAddress.country,Date:order.createdAt.substring(0,20),infoitem:array,cname:order.name,mNumber:order.mobNumber,Dstatus:Status,track:track,variant:variant,Dcolor:Dcolor,now:now}})
       
    }
  return (
    <div>  
      <div className='col-md-4'>
      <h2 style={{backgroundColor:'orange'}}>ORDER</h2>
            <div className='flex-container'>
                <div className='w-100 m-1'>
                    {order.orderItems.map(item=>{
                        return <div style={{display:'flex',gap:'20px',paddingBottom:'10px',}} onClick={callme}>
                          <img src={item.img} style={{height:"70px",width:'70px'}}></img>
                            <div>
                            <div style={{display:'flex'}}>
                            <h1>{item.name}</h1>
                            </div>
                            <div style={{display:'flex'}}>
                            <h1>X{item.quantity}</h1>
                            </div>
                            <div style={{display:'flex'}}>
                            <h1>={item.price} /- RS</h1>
                            </div>
                            </div>
                        </div>
                    })}
                </div>
                </div>
                <div style={{display:'flex',gap:'60px'}}>
                    <h2>Total Amount :{order.orderAmount}</h2>
                    <b><h2>Data :{order.createdAt.substring(0,10)}</h2></b>
                </div>
           </div>
           <hr></hr>
    </div>
  )
}

export default MapOrders
