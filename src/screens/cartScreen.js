import React, { useState ,useEffect} from "react";
import { useSelector,dispatch, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function CartScreen() {
    const cartstate=useSelector((state)=>state.addtoCartReducer)
    const cartItems=cartstate.cartItems
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
    const dispatch=useDispatch()
    // console.log(cartItems)
    // useEffect(() => {
    //   if (localStorage.getItem("currentUser") === null) {
    //     window.location.href = "/";
    //   }
    // }, []);
return (
    <div>
      <div className='row justity-content-center'>
        <div>
            <h2 style={{fontSize:'40px'}}>My Cart</h2><br></br>
             <h2 style={{fontSize:'40px'}}>(Free Delivery Above 100 RS /-)</h2>
            <h2 style={{fontSize:'40px'}}>(30 RS /- Delivery Charges Below 100 Rs /-)</h2>
            <div className='totalp' style={{display:'flex'}}>
            <h2 style={{fontSize:'40px'}}>Subtotal : {subtotal} /Rs-</h2>
            <button className="btn" style={{height:'40px',marginLeft:'50px'}}><NavLink to={"/checkout"} style={{fontSize:'20px',textDecoration:'none',cursor:"pointer"}}>Order Now</NavLink></button>
             </div>
            {cartItems.map(item=>{
                return <div className="flex-container" key={item._id}>
                  <div className="m-1 w-100">
                    <img src={item.img} style={{height:'80px',height:'80px'}}></img>
                </div>
                <div className="text-left m-1 w-100 box-1">
                <h1>{item.name}[{item.varient}]</h1>
                <h1>price :{item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                <h1 style={{display:'flex'}}>Quantity :</h1>
                <i className="fa-solid fa-plus" area-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                <b>{item.quantity}</b>
                <i className="fa-solid fa-minus" area-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                <hr></hr>
                </div>
                <div className="m-1 w-100">
                <i className="fa-solid fa-trash" style={{cursor:'pointer'}} area-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
            </div>
            })}
        </div>
      </div>
                <button className="btn" style={{height:'40px',marginLeft:'50px'}}><NavLink to={"https://forms.gle/RmJtbGjadz1yfzUQ8"} style={{fontSize:'20px',textDecoration:'none',cursor:"pointer"}}>Feedback</NavLink></button>
    </div>
  )
}
