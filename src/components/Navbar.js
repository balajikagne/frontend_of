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
      <a className="navbar-brand" href="/" >
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
                  <i class="fa-solid fa-user"></i> {currentUser.name}
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="/orders">
                    <i class="fa-solid fa-bag-shopping"></i>My Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="/"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li><i class="fa-solid fa-right-from-bracket"></i>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <i class="fas fa-sign-in"></i>Login <span className="sr-only">(current)</span>
                </a>
              </li>
            )}
            <div className="navbar1">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i class="fa-solid fa-home" style={{fontSize:'20px',paddingRight:'10px'}}></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                <i class="fa-solid fa-lock" style={{fontSize:'20px',paddingRight:'10px'}}></i>Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                <i class="fa-solid fa-address-card" style={{fontSize:'20px',paddingRight:'10px'}}></i>About us
              </a>
            </li>
               <li className="nav-item">
              <a className="nav-link" href="https://forms.gle/RmJtbGjadz1yfzUQ8">
                <i class="fa-solid fa-comment" style={{fontSize:'20px',paddingRight:'10px'}}></i>Feedback
              </a>
            </li>
               
            <li className="nav-item">
            <a href="tel:+919579394354" style={{color:'black',textDecoration:'none'}}><i class="fa-solid fa-phone" style={{fontSize:'20px',paddingRight:'10px'}}></i>Helpline Number</a>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
}
