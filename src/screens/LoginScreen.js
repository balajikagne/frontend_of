import React from 'react'
import { useState,useEffect } from 'react';
import { loginUser } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { NavLink } from 'react-router-dom';
export default function LoginScreen() {

  const [mobNumber, setmobNumber] = useState("");
    const [showpassword, setShowpassword] = useState(false);
  const [password, setpassword] = useState("");
  const loginstate=useSelector(state=>state.loginUserReducer)
  const {loading,error}=loginstate;
  const dispatch=useDispatch()

    const [showError, setShowError] = useState(false);
    function handlePhoneNumber(event){
      let new_Number = event.target.value;
    let new_Number_length = new_Number.length;
    let number_at_start=new_Number[0]
    setmobNumber(new_Number);
    console.log(number_at_start,"hellow")
    console.log(mobNumber)
    if (new_Number_length > 10 || new_Number_length < 10) {
      setShowError(true);
    } else if (new_Number_length == 10 && number_at_start>=6 ) {
      setShowError(false);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("currentUser") !== null) {
      window.location.href='/'
    }
  }, []);
  function login(){
    const user={mobNumber,password}
    dispatch(loginUser(user))
  }
  return (
    <div>
    <div className="row justify-content-center mt-5 ">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h3 className="text-center m-2">
          <i class="fa-solid fa-right-to-bracket"></i>Login
        </h3>
         {showError ? (
        <div style = {{ color: "red" }}> Invalid Mobile Number Length </div>
      ) : (
        <div> Valid Mobile number. </div>
      )}
        {loading && (<Loading/>)}
        {error &&(<Error error='Something went wrong'/>)}
        <div>
         
           <input
              type="phone"
              placeholder="Mob Number"
              className="form-control"
              value={mobNumber}
              onChange={
                handlePhoneNumber
              }
              required
            ></input>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',cursor:'pointer'}}>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            ></input>
            <div style={{marginTop:'17px',marginLeft:'5px'}}><i className="fa-solid fa-eye" onClick={()=>{
              setShowpassword((prev) => !prev);
            }}></i></div>
            </div>
            <br></br>
            <button onClick={login} className="btn mt-3">
              Login
            </button>
            <br></br>
          <NavLink  to="/register" style={{color:'black',textDecoration:'none'}}><button className="btn mt-3">Click Here To Create New Account</button></NavLink>
          
        </div>
      </div>
    </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{display:'inline',textAlign:'left'}}>
                <h4 style={{marginBottom:'20px'}}>Steps For Login</h4>
        <h2>1.New Users Please Register First</h2>
        <h2>2.Login</h2>
      </div>
      </div>
  </div>
  )
}
