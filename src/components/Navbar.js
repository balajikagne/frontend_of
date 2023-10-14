import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/UserActions";
import { NavLink } from "react-router-dom";
import 'react-bootstrap';
export default function Navbar() {
  const cartstate = useSelector((state) => state.addtoCartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div>
    <div style={{marginTop:'100px'}}>
      <nav className="navbar navbar-expand-lg fixed-top shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand" href="/home" >
          <img src="logo1.png" height={"40px"} width={"40px"} style={{marginBottom:'5px',marginRight:'10px'}}></img>
          <b className="testygoicon">TestyGo</b>
        </a>
      <div className="cartsitems">
     <li className="cartsitems" >
              <a className="nav-link" href="/cart" style={{fontSize:'20px'}}>
              <i class="fa-solid fa-cart-shopping" style={{fontSize:'20px'}}></i> {cartstate.cartItems.length}
              </a>
        </li>
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
                  {currentUser.name}
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="/orders">
                    My Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login <span className="sr-only">(current)</span>
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
    </div>
  );
}
