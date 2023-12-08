import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/UserActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import swal from "sweetalert2";
import { NavLink } from 'react-router-dom';
import { auth } from "../firebase.config";
import { RecaptchaVerifier } from "firebase/auth";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
let OTP_MOB_A = [];
export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [otp, setotp] = useState("");
  // const [location, setlocation] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();

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
          swal.fire({
        title: "OTP sent successfully",
              text: "Thank You",
              icon: "success",
        confirmButtonText: "OK",
      })
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS has not been sent");
          swal.fire({
        title: "Please enter mobile number currently !",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      })
        });
    } catch (error) {
      alert("something went wrong");
    }
   }
   else{
     swal.fire({
        title: "Please enter mobile number currently !",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      })
       
   }
   }catch(error){
   swal.fire({
        title: "Please refresh the page and Re-enter the Mobile Number!",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      })
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
            swal.fire({
        title: "OTP verified successfully",
              text: "Thank You",
              icon: "success",
        confirmButtonText: "OK",
      })
            

            // ...
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            // console.log(error)
            swal.fire({
        title: "Please enter OTP currectly !",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      })
          });
      } catch (error) {
        // console.log(error);
         swal.fire({
        title: "Please enter OTP currectly !",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      })
      }
    } else {
       swal.fire({
        title: "Please enter OTP currectly !",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      })
    }
  }

  function register() {
    if (OTP_MOB_A[0] !== " " ||mobNumber!=='') {
      if (password !== cpassword ||mobNumber===''||otp===''|| OTP_MOB_A[0] === "" ||password==='') {
        // alert("passwords not matched");
        console.log("hellow")
       swal.fire({
        title: "Please enter all information currectly",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // window.location.href='/register'
        }
      });
        
      } 
      else {
        console.log("hellow2")
        const user = {
          name,
          // location,
          mobNumber,
          password,
        }
        dispatch(registerUser(user));
      }
    } 
    else {
      alert("Please enter opt currectly");
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <div id="sign-in-button"></div>
          {loading && <Loading />}
          {success && <Success success="User Register Successfully" />}
          {error && <Error error="mobNumber already register" />}
          <h3 className="text-center m-2" style={{ fontSize: "35px" }}>
           <i class="fa-solid fa-pen-to-square"></i> Register
          </h3>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            ></input>
            <input
              type="text"
              placeholder="Mob Number"
              className="form-control"
              value={mobNumber}
              onChange={(e) => {
                setmobNumber(e.target.value);
              }}
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
                 style={{marginRight:'40px'}}
            >
              Send OTP
            </button>
            <button onClick={onSubmitOTP} className="btn mt-3">
              Verify
            </button>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            ></input>
            <input
              type="password"
              placeholder="comfirmpassword"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
              required
            ></input>
            <button onClick={register} className="btn mt-3">
              Register
            </button>
            <br></br>
           <NavLink  to="/login" style={{color:'black',textDecoration:'none'}}><button className="btn mt-3">Already Registered</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
