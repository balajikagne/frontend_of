import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/UserActions";
import { NavLink } from "react-router-dom";
import application from './Testygo_App.apk'
import 'react-bootstrap';
export default function Navbar() {
  const cartstate = useSelector((state) => state.addtoCartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
    const [cartAn,setcartAn]=useState(false)
  const { currentUser } = userstate;
  const dispatch = useDispatch();
    useEffect(()=>{
    if (cartstate.cartItems.length===0){
      setcartAn(false)
      console.log(cartAn)
    }
    else{
      setcartAn(true)
      console.log(cartAn)
    }
  },[cartstate.cartItems.length])
  return (
     <div>
    <div style={{marginTop:'100px'}}>
      <nav className="navbar navbar-expand-lg fixed-top shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand" href="/" >
          <img src="logo1.png" height={"40px"} width={"40px"} style={{marginBottom:'5px',marginRight:'10px'}}></img>
          <b className="testygoicon">TestyGo</b>
        </a>
     <div className="cartsitems1 iconame">
      <div className="cartbox">
     <li className="cartsitems" >
              <a className="nav-link" href="/cart" style={{fontSize:'20px'}}>
              {cartAn? (<><i className="fa-solid fa-cart-shopping animation-cart" style={{marginRight:'7px'}}></i><span className="animation-cart">{cartstate.cartItems.length}</span></> ):(<><i className="fa-solid fa-cart-shopping" style={{fontSize:'20px'}}></i>{cartstate.cartItems.length}</>)}
              </a>
              
        </li>
     </div>
     </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown show mt-1">
                <a
                  style={{ color: "black" }}
                  className="dropdown-toggle nav-link"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i> {currentUser.name}
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                    <a className="dropdown-item" href="/profile">
                  <i className="fas fa-user-circle mr-2"></i>Profile
                  </a>
                  <a className="dropdown-item" href="/orders">
                    <i className="fa-solid fa-bag-shopping"></i>My Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="/login"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li><i className="fa-solid fa-right-from-bracket"></i>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <i className="fas fa-sign-in"></i>Login <span className="sr-only">(current)</span>
                </a>
              </li>
            )}
            <div className="navbar1">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fa-solid fa-home" style={{fontSize:'20px',paddingRight:'10px'}}></i>Home
              </a>
            </li>
           {currentUser?.isAdmin?(<><li className="nav-item">
              <a className="nav-link" href="/admin">
                <i className="fa-solid fa-lock" style={{fontSize:'20px',paddingRight:'10px'}}></i>Admin
              </a>
            </li></>):(null)}
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                <i className="fa-solid fa-address-card" style={{fontSize:'20px',paddingRight:'10px'}}></i>About us
              </a>
            </li>
               <li className="nav-item">
              <a className="nav-link" href="https://forms.gle/RmJtbGjadz1yfzUQ8">
                <i className="fa-solid fa-comment" style={{fontSize:'20px',paddingRight:'10px'}}></i>Feedback
              </a>
            </li>
              <li className="nav-item">
              <a className="nav-link" href="/helpline">
              <i className="fa-solid fa-phone" style={{fontSize:'20px',paddingRight:'10px'}}></i>HelpLine Number
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/download'>
                <i className="fa-solid fa-download" style={{fontSize:'20px',paddingRight:'10px'}}></i>Download App
              </a>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
}
