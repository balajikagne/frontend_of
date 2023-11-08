import React from "react";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { registerUser } from "../actions/UserActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword,setcpassword]=useState("")
  const registerstate=useSelector(state=>state.registerUserReducer)
  const {error,loading,success}=registerstate
  const dispatch=useDispatch()
  function register(){
    if (password!=cpassword)
    {
        alert("passwords not matched")
    }
    else
    {
        const user={
            name,
            mobNumber,
            password
        }
        // console.log(user)
        dispatch(registerUser(user))
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          {loading && (<Loading/>)}
          {success && (<Success success='User Register Successfully'/>)}
          {error && (<Error error="mobNumber already register"/>)}
          <h3 className="text-center m-2" style={{fontSize:'35px'}}>
            Register
          </h3>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
              value={name}
              onChange={(e)=>{
                setname(e.target.value)
              }}
              required
            ></input>
            <input
              type="text"
              placeholder="Mob Number"
              className="form-control"
              value={mobNumber}
              onChange={(e)=>{
                setmobNumber(e.target.value)
              }}
              required
            ></input>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
              required
            ></input>
            <input
              type="password"
              placeholder="comfirmpassword"
              className="form-control"
              value={cpassword}
              onChange={(e)=>{
                setcpassword(e.target.value)
              }}
              required
            ></input>
            <button onClick={register} className="btn mt-3">Register</button>
            <br></br>
            <a style={{color:'black',textDecoration:'none'}} href="/login" className='mt-2'>Click Here To Login</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
