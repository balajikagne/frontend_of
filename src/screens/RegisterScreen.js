import React from "react";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { registerUser } from "../actions/UserActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { auth } from "../firebase.config";
import { RecaptchaVerifier } from "firebase/auth";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword,setcpassword]=useState("");
  const [otp, setotp] = useState("");
  let OTP_MOB_A = [];
  const registerstate=useSelector(state=>state.registerUserReducer)
  const {error,loading,success}=registerstate
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

  function configure() {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "visible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
      },
      defaultCountry: "IN",
    });
  }


  function onSignInSubmit() {
   try{
    if (mobNumber!=='')
   {
    configure();
    try {
     
      let phoneNumber = "+91" + mobNumber;
      console.log(phoneNumber);
      let appVerifier = window.recaptchaVerifier;
      const auth = getAuth();

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent");
          alert("OTP sent successfully");
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS has not been sent");
          alert("please again enter mobile number1");
        });
    } catch (error) {
      alert("something went wrong");
    }
   }
   else{
    alert("please enter mobile number currectly")
   }
   }catch(error){
   alert("OTP is sent successfully")
   }
  }


function onSubmitOTP() {
    if (otp !== "") {
      let code = otp;
      try {
        window.confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            let user = result.user;
            let a = user.phoneNumber;

            for (let i = 0; i <= 9; i++) {
              OTP_MOB_A[i] = a[i + 3];
            }
            alert("OTP Varified successfully");
            console.log(OTP_MOB_A);

            // ...
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            // console.log(error)
            alert("Please enter currect  OTP");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please enter currect OTP");
    }
  }

  
  
  function register(){
   
    if (OTP_MOB_A[0] !== "" ||mobNumber!==' ') {
      if (password !== cpassword ||mobNumber!==' '||otp!==' '|| OTP_MOB_A[0] !== " " ) {
        
        window.location.href='/register'
        
      } else {
        const user = {
          name,
          mobNumber,
          password,
        };
       
        dispatch(registerUser(user));
    
      }
    } 
    else {
      alert("Please enter OTP currectly");
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
          {showError ? (
        <div style = {{ color: "red" }}> Invalid Mobile Number Length </div>
      ) : (
        <div> Valid Mobile number. </div>
      )}
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
              type="phone"
              placeholder="Mob Number"
              className="form-control"
              value={mobNumber}
              onChange={
                handlePhoneNumber
              }
              required
            ></input>
                <input
              type="text"
              placeholder="OTP"
              className="form-control"
              value={otp}
              onChange={(e) => {
                setotp(e.target.value);
              }}
              required
            ></input>
                <button
              id="sign-in-button"
              onClick={onSignInSubmit}
              className="btn mt-3"
            >
              Send OTP
            </button>
            <button onClick={onSubmitOTP} className="btn mt-3">
              submit
            </button>
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
