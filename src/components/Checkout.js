
// import StripeCheckout from 'react-stripe-checkout'
import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ButtonGroup, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { placeOrder } from '../actions/OrderActions';
import { addItems } from "../actions/MenuActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { loginUserReducer } from "../Reducers/UserReducer";
import  axios  from "axios";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import swal from "sweetalert2";
const Checkout=({subtotal})=> {
  const cartstate=useSelector((state)=>state.addtoCartReducer)
    const cartItems=cartstate.cartItems;
   const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
    console.log(cartItems);
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
  const [shippingAddress, setshippingAddress] = useState("");
  const [city, setcity] = useState("pune");
  const [Fullname, setFullname] = useState("");
  const [pincode, setpincode] = useState(411041);
  const [mobNumber, setmobNumber] = useState("");
  const [showError, setShowError] = useState(false);
  const [time,settime]=useState(new Date())
    const dispatch=useDispatch();
    const allordersState=useSelector(state=>state.allOrdersReducer)
  const {loading,error,orders}=allordersState
   function handlePhoneNumber(event){
      let new_Number = event.target.value;
    let new_Number_length = new_Number.length;
    let number_at_start=new_Number[0]
    setmobNumber(new_Number);
    if (new_Number_length > 10 || new_Number_length < 10 ) {
      setShowError(true);
    } else if (new_Number_length == 10 && number_at_start>=6) {
      setShowError(false);
    }
  }
    const submitform = async (e) => {
      e.preventDefault();
      if (showError==true ||shippingAddress===""){
        swal.fire({
        title: "Please enter all information currectly",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href='/checkout'
        }
      });
      }
      else
      {
        const item = {
        shippingAddress,
        city,
        pincode,
        mobNumber
      };
      const webHooKURL='https://discord.com/api/webhooks/1162616587375878164/pPnOFhZsMgBMkdejACWU2AzZQaWN0oWAXbaIzPNuhwrLv-bZHoqz83X-eS_BeYc-26RA'
      const webHooKURL1='https://discord.com/api/webhooks/1162616587375878164/pPnOFhZsMgBMkdejACWU2AzZQaWN0oWAXbaIzPNuhwrLv-bZHoqz83X-eS_BeYc-26RA'
      const webHooKURL2='https://discord.com/api/webhooks/1162626500021985391/2R6fX-NYPTndUKh985Fbd4YonIWPTq0v8OlcrmxbZL-GEg4ds9O8Ga1lOUh4S1Xsyxcd'
     
      // var quantityname=cartItems.map((item)=>item.quantity+" ")
      // var itemname=cartItems.map((item)=>item.name+" ")
      var sizeofcart=cartItems.length;
      var arrName1=new Array(sizeofcart);
      var arrQuantity1=new Array(sizeofcart);
      var arrName2=new Array(sizeofcart);
      var arrQuantity2=new Array(sizeofcart);
      var arrName3=new Array(sizeofcart);
      var arrQuantity3=new Array(sizeofcart);
      // var arrprice=new Array(sizeofcart)
      let totalprice1=0;
      let totalprice2=0;
      let totalprice3=0;

      let checkdealer1;
      let checkdealer2;
      let checkdealer3;
      for (let i=0;i<sizeofcart;i++)
      {
       
        // console.log(cartItems[2].country)
        if (cartItems[i].country==='manoj')
        {
          checkdealer1='manoj';
          arrName1[i]=cartItems[i].name+" ";
          arrQuantity1[i]=cartItems[i].quantity+" ";
          totalprice1=totalprice1+cartItems[i].price;
        }
        if (cartItems[i].country==='nilesh')
        {
          checkdealer2='nilesh';
          arrName2[i]=cartItems[i].name+" "
          arrQuantity2[i]=cartItems[i].quantity+" "
          totalprice2=totalprice2+cartItems[i].price;
        }
        if (cartItems[i].country==='ameer')
        {
          checkdealer3='ameer';
          arrName3[i]=cartItems[i].name+" ";
          arrQuantity3[i]=cartItems[i].quantity+" ";
          totalprice3=totalprice3+cartItems[i].price;
        }
        //if else condition
      }
      if (checkdealer1==='manoj')
      {
        try{
          const datauser={
            content :`--------------------------------------------------->NEW\n TIME :${time} \n NAME :${Fullname} \n STREET: ${shippingAddress}\n CITY: ${city}\n PINCODE: ${pincode}\n  MOBNUMBER: ${mobNumber}\n Name of Items: ${arrName1}\n Quantity: ${arrQuantity1}\n Total Prices: ${totalprice1}`,
            tts:false,
            color:'white',
          }
          let  res =await axios.post(webHooKURL,datauser)
          fetch('https://sheetdb.io/api/v1/sa7ojrpi5otim',{
        method:'POST',
        headers:{
          Accept:'application/json',
          "Content-Type":'application/json',
        },
        body:JSON.stringify({
          data:[
            { 
       Fullname: currentUser.name,
       shippingAddress:shippingAddress,
        city:"pune",
        pincode:411041,
        mobNumber:currentUser.mobNumber,
       cartItems1:arrName1,
        quantity1:arrQuantity1,
        Total_Amount:totalprice1,
              Time:time
            }
          ]
        })
      })
        }
        catch(error)
        {
          console.log(error)
        }
      }
      if (checkdealer2==='nilesh'){
        try{
          const datauser={
            content :`--------------------------------------------------->NEW\n TIME :${time} \n NAME :${Fullname} \n STREET: ${shippingAddress}\n CITY: ${city}\n PINCODE: ${pincode}\n  MOBNUMBER: ${mobNumber}\n Name of Items: ${arrName2}\n Quantity: ${arrQuantity2}\n Total Prices: ${totalprice2}`,
            tts:false,
            color:'white',
          }
       
          let  res =await axios.post(webHooKURL1,datauser)
          fetch('https://sheetdb.io/api/v1/2dtfmx0pjw03g',{
        method:'POST',
        headers:{
          Accept:'application/json',
          "Content-Type":'application/json',
        },
        body:JSON.stringify({
          data:[
            { 
       Fullname: currentUser.name,
       shippingAddress:shippingAddress,
        city:"pune",
        pincode:411041,
        mobNumber:currentUser.mobNumber,
        cartItems1:arrName2,
        quantity1:arrQuantity2,
        Total_Amount:totalprice2,
              Time:time
            }
          ]
        })
      })
        }
        catch(error)
        {
          console.log(error)
        }
      }
      if (checkdealer3==='ameer')
      {
        try{
          const datauser={
            content :`--------------------------------------------------->NEW\n TIME :${time} \n NAME :${Fullname} \n STREET: ${shippingAddress}\n CITY: ${city}\n PINCODE: ${pincode}\n  MOBNUMBER: ${mobNumber}\n Name of Items: ${arrName3}\n Quantity: ${arrQuantity3}\n Total Prices: ${totalprice3}`,
            tts:false,
            color:'white',
          }
         
          let  res =await axios.post(webHooKURL2,datauser)
      //     fetch('https://sheetdb.io/api/v1/sa7ojrpi5otim',{
      //   method:'POST',
      //   headers:{
      //     Accept:'application/json',
      //     "Content-Type":'application/json',
      //   },
      //   body:JSON.stringify({
      //     data:[
      //       { 
      //  Fullname: Fullname,
      //  shippingAddress:shippingAddress,
      //   city:city,
      //   pincode:pincode,
      //   mobNumber:mobNumber,
      //   cartItems1:arrName3,
      //   quantity1:arrQuantity3,
      //   Total_Amount:totalprice3
      //       }
      //     ]
      //   })
      // })
          let data=
      { 
        Fullname:currentUser.name,
 shippingAddress:shippingAddress,
  city:"pune",
  pincode:411041,
  mobNumber:currentUser.mobNumber,
  cartItems1:arrName1,
  quantity1:arrQuantity1,
  Total_Amount:totalprice1,
        Time:time
      }
      axios.post('https://sheet.best/api/sheets/a53d6c17-3a9a-477f-91bf-9440ceccde19',data)
        }
        catch(error)
        {
          console.log(error)
        }
      }
      dispatch(placeOrder(item,subtotal));
        console.log(item,subtotal);
      swal.fire({
        title: "Your order will be delivered within 35 minutes",
              text: "Thank You",
              icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href='/'
        }
      });
      }
    };
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
    
      swal.fire({
        title: "Please Login",
              text: "Thank You",
              icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href='/login'
        }
        else{
          window.location.href='/login'
        }
      })
    }
  }, []);
  return (
      <div>
      <h4 className="bg-dark text-light p-2">Order Now</h4>
      <Form>
        <Col className="mb-3">
          <br></br>
          <Form.Group as={Col} controlId="formGridnae">
            <Form.Label>Delivery address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Delivery address"
              value={shippingAddress}
              onChange={(e) => setshippingAddress(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridnae"> */}
            {/* <Form.Label>city</Form.Label> */}
            {/* <Form.Control
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            /> */}
          {/* </Form.Group> */}
        </Col>

        {/* <Form.Group as={Col} controlId="formGridnae"> */}
          {/* <Form.Label>pincode</Form.Label> */}
          {/* <Form.Control
            type="number"
            placeholder="pincode"
            value={pincode}
            onChange={(e) => setpincode(e.target.value)}
          /> */}
        {/* </Form.Group> */}
        <Button style={{marginTop:'10px'}} variant="primary" onClick={submitform}>
         ORDER NOW
        </Button>
      </Form>
    </div>
  
  )
}
export default Checkout;
