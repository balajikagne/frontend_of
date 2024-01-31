import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../actions/UserActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";
import swal from "sweetalert2";
import { NavLink } from "react-router-dom";
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
  const [showpassword, setShowpassword] = useState(false);
  const [showTimer,setTimers]=useState(false)
  const [timer, setTimer] = useState(20);
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
    
    try {
      if (mobNumber !== "") {
        const myInterval = setInterval(() => {
      swal.fire({
        title: "Please Click on I'm not robot.",
        text: "Thank You",
        icon: "success",
        confirmButtonText: "OK",
      });
    }, 1500);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 1500);

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
              }).then((result)=>{
                if (result.isConfirmed){
                  setTimer(20);
                  setTimers(true)
                }
                else{
                  setTimer(20);
                  setTimers(true)
                }
              });;
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
              });
            });
        } catch (error) {
          alert("something went wrong");
        }
      } else {
        swal.fire({
          title: "Please enter mobile number currently !",
          text: "Thank You",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      swal.fire({
        title: "Please refresh the page and Re-enter the Mobile Number!",
        text: "Thank You",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  }

  function onSubmitOTP() {
    if (
      password !== cpassword ||
      otp !== "" ||
      mobNumber !== "" ||
      name !== ""
    ) {
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
           dispatch(registerUser(user));
                  dispatch(loginUser(user1));

            // ...
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            // console.log(error)
            swal.fire({
              title: "Please enter information currectly !",
              text: "Thank You",
              icon: "warning",
              confirmButtonText: "OK",
            });
          });
      } catch (error) {
        // console.log(error);
        swal.fire({
          title: "Please enter information currectly !",
          text: "Thank You",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } else {
      swal.fire({
        title: "Please enter information currectly !",
        text: "Thank You",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  }
  useEffect(() => {
    if (localStorage.getItem("currentUser") !== null) {
      window.location.href='/'
    }
  }, []);
   useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);
  const callme=()=>{
    swal.fire({
      title: "Please Re-enter Mobile Number!",
      text: "Thank You",
      confirmButtonText: "OK",
    }).then((result)=>{
      if (result.isConfirmed){
        window.location.href="/register"
      }
      else{
        window.location.href="/register"
      }
    });
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
            <i class="fa-solid fa-pen-to-square"></i> Create Account
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
            <div style={{display:'flex'}}>
              {showTimer ? (<a onClick={()=>{callme()}} style={{ textDecoration: "none" }}>
                <button className="btn mt-3">Resend OTP</button>
              </a>):(<button
              id="sign-in-button"
              onClick={onSignInSubmit}
              className="btn mt-3"
              style={{ marginRight: "40px" }}
            >
            send OTP
            </button>)}
            {showTimer ?(<div style={{marginTop:'20px',marginLeft:'10px'}}><h8>{timer} seconds</h8></div>):(null)}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
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
              <div style={{ marginTop: "17px", marginLeft: "5px" }}>
                <i
                  class="fa-solid fa-eye"
                  onClick={() => {
                    setShowpassword((prev) => !prev);
                  }}
                ></i>
              </div>
            </div>
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
            <div className="btnrs">
                <NavLink
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <button className="btn mt-3">Already have account</button>
              </NavLink>
                
              <button onClick={onSubmitOTP} className="btn mt-3">
                Create New Account
              </button>

              <a href="/register" style={{ textDecoration: "none" }}>
                <button className="btn mt-3">Refresh</button>
              </a>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
