import React from 'react'
import { useState,useEffect } from 'react';
import { loginUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function LoginScreen() {

  const [mobNumber, setmobNumber] = useState("");
  const [password, setpassword] = useState("");
  const loginstate=useSelector(state=>state.loginUserReducer)
  const {loading,error}=loginstate;
  const dispatch=useDispatch()
  function login(){
    const user={mobNumber,password}
    dispatch(loginUser(user))
  }
  
  return (
    <div>
    <div className="row justify-content-center mt-5 ">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h3 className="text-center m-2">
          Login
        </h3>
        {loading && (<Loading/>)}
        {error &&(<Error error='Something went wrong'/>)}
        <div>
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
          <button onClick={login} className="btn mt-3">Login</button>
          <br></br>
          <a style={{color:'black',textDecoration:'none'}} href="/register" className='mt-2'>Click Here To register</a>
        </div>
      </div>
    </div>
  </div>
  )
}
