
import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserOrders } from '../actions/OrderActions'
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getUserOrderReducer } from '../Reducers/orderReducer'
import { NavLink, useLocation } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from "axios";
function FullOrderInfo({amount}) {
    const location =useLocation();
    let scolor=location.state.Dcolor;
    const [currentTime, setCurrentTime] = useState('');
     const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    // Make an HTTP request to start the timer when the component mounts
    axios
      .get(
        `https://super-worm-visor.cyclic.app/api/items/start-timer/${location.state.orderId}`
      )
      .catch((error) => console.error(error));
  }, []); // Include location.state.orderId in dependency array

  useEffect(() => {
    // Periodically fetch the remaining time from the server
    const intervalId = setInterval(() => {
      axios
        .get(
          `https://super-worm-visor.cyclic.app/api/items/get-timer/${location.state.orderId}`
        )
        .then((response) => {
          const remainingTime = response.data.remainingTime;
          // Update your UI with the remaining time
          setRemainingTime(remainingTime);
        })
        .catch((error) => console.error(error));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [location.state.orderId]); // Include location.state.orderId in dependency array
  const formatRemainingTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format the time
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      setCurrentTime(formattedTime);
    };

    // Update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once on mount

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
                    
                    <h1 style={{color:'orange'}}> Date :{location.state.Date}</h1>
                    <h1 style={{color:'orange'}}> Time :{currentTime}</h1>

                    </div>
                    <div>
                    <hr></hr>
                    <h2 style={{fontSize:'25px'}}>Delivery Address</h2>
                    <h1> street :{location.state.street}</h1>
                    <h1> city :{location.state.city}</h1>
                    <h1> country :India</h1>
                    </div>
                    <div>
                        <hr></hr>
                    <h2 style={{fontSize:'25px'}}>Delivery status</h2>
                    <h1 style={{color:"blue"}}> Order Confirmation Status : <span style={{fontSize:'15px',fontWeight:'10px'}}>Confirmed Successfully</span></h1>
                    <h1 style={{backgroundColor:"yellow"}}>Order Delivery Status:  <span style={{color:scolor}}>{location.state.Dstatus}</span></h1>
                          <div style={{marginBottom:'30px',marginTop:'30px'}}>
          {(remainingTime===0) ? (<>
            <li className="nav-item">
        <a href="tel:+917498821001" style={{color:'black',textDecoration:'none',color:'green'}}><i class="fa-solid fa-phone" style={{fontSize:'20px',paddingRight:'10px'}}></i>Helpline Number-2</a>
            </li></>):(<>
            <div>
            <h6 className="Timer_class">Remaining Time: {formatRemainingTime(remainingTime)}</h6>
          </div></>)}
          </div>
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
