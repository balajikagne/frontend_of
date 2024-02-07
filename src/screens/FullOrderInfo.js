import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/OrderActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getUserOrderReducer } from "../Reducers/orderReducer";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

import ProgressBar from "react-bootstrap/ProgressBar";
function FullOrderInfo({ amount }) {
  const location = useLocation();
  let scolor = location.state.Dcolor;
  const dispatch = useDispatch();
  // const [remainingTime, setRemainingTime] = useState(0);

  // useEffect(() => {
  //   // Make an HTTP request to start the timer when the component mounts
  //   axios
  //     .get(
  //       `https://super-worm-visor.cyclic.app/api/items/start-timer/${location.state.orderId}`
  //     )
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.error(error));
  // }, []); // Include location.state.orderId in dependency array

  // useEffect(() => {
  //   // Periodically fetch the remaining time from the server
  //   const intervalId = setInterval(() => {
  //     axios
  //       .get(
  //         `https://super-worm-visor.cyclic.app/api/items/get-timer/${location.state.orderId}`
  //       )
  //       .then((response) => {
  //         const remainingTime = response.data.remainingTime;
         
  //         // Update your UI with the remaining time
  //         setRemainingTime(remainingTime);
  //       })
  //       .catch((error) => console.error(error));
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [location.state.orderId]); // Include location.state.orderId in dependency array
  // const formatRemainingTime = (timeInSeconds) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = timeInSeconds % 60;
  //   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  // };
const dateString = `${location.state.Date}`; // Assuming location.state.Date is a valid date string
  const trimmedDateString = dateString.replace(/\.$/, '').replace(/\.{2,}$/, '');
  const timestamp = Date.parse(trimmedDateString);
  const newTimestamp = timestamp + 35 * 60 * 1000; // 35 minutes in milliseconds
  
  const dateObject = new Date(newTimestamp);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Convert hours to 12-hour clock format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return (
    <>
      <div className="text-left w-100% m-1">
        <div>
          <div>
            {" "}
            <h2 style={{ fontSize: "25px", backgroundColor: "orange" }}>
              ORDER Information
            </h2>
            <h1> Name :{location.state.cname}</h1>
            <h1> Mobile Number :{location.state.mNumber}</h1>
          </div>
        </div>
        <hr></hr>
        <h2 style={{ fontSize: "25px" }}>Total Item List</h2>
        {location.state.infoitem.map((item, index) => {
          return (
            <div>
              <h1 key={index}>
                {index + 1}.{item.name}
              </h1>
              <div style={{ display: "flex" }}>
                <h1>Quantity x {item.quantity}</h1>
                <h1>={item.price} /- RS</h1>
              </div>
            </div>
          );
        })}
        <div>
          <hr></hr>
          <h2 style={{ fontSize: "25px" }}>Total Bill And Date</h2>
          <h1> Amount :{location.state.amount}</h1>
          <h1> Date :{location.state.Date}</h1>
          
        </div>
        <div>
          <hr></hr>
          <h2 style={{ fontSize: "25px" }}>Delivery Address</h2>
          <h1> street :{location.state.street}</h1>
          <h1> city :{location.state.city}</h1>
          <h1> country :{location.state.country}</h1>
        </div>
        <div>
          <hr></hr>
          <h2 style={{ fontSize: "25px" }}>Delivery status</h2>
          <h1>
            {" "}
            Order Confirmation Status :{" "}
            <span style={{ fontSize: "15px", fontWeight: "10px" }}>
              Confirmed Successfully
            </span>
          </h1>
                <div className="order_date_time">
            <h6>Order Delivered At  {` ${formattedHours}:${minutes} ${ampm}`}</h6>
          </div>
          <h1>
            Order Delivery Status:{" "}
            <span style={{ color: scolor }}>{location.state.Dstatus}</span>
          </h1>
          <div style={{marginBottom:'30px',marginTop:'30px'}}>
           <li className="nav-item">
        <a href="tel:+917498821001" style={{color:'black',textDecoration:'none',color:'green'}}><i class="fa-solid fa-phone" style={{fontSize:'20px',paddingRight:'10px'}}></i>Helpline Number-2</a>
            </li>
          </div>
          <ProgressBar
            animated
            now={location.state.track}
            variant={location.state.variant}
            label={`${location.state.now}`}
          />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginTop: "10px", width: "100%" }}>
              <i class="fa-solid fa-truck" style={{ fontSize: "30px" }}></i>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                justifyContent: "end",
              }}
            >
              <i
                class="fa-solid fa-people-carry-box"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullOrderInfo;
