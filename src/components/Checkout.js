
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

const Checkout=({subtotal})=> {
  const cartstate=useSelector((state)=>state.addtoCartReducer)
    const cartItems=cartstate.cartItems
    console.log(cartItems);
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
  const [shippingAddress, setshippingAddress] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const [time,settime]=useState(new Date())
    const dispatch=useDispatch();
    const allordersState=useSelector(state=>state.allOrdersReducer)
  const {loading,error,orders}=allordersState
  
    const submitform = async (e) => {
      e.preventDefault();
      const item = {
        shippingAddress,
        city,
        pincode,
        mobNumber
      };
      const webHooKURL='https://discord.com/api/webhooks/1162687599907962970/z6lUM60fJ840z3LkYrCEkeSdqPuDyHj9M01jerNCUxf9Oxx0wzrgSDAtLtH84aRTfYN1'
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
        if (cartItems[i].country==='amir')
        {
          checkdealer3='amir';
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
            content :`--------------------------------------------------->NEW\n TIME :${time} \n STREET: ${shippingAddress}\n CITY: ${city}\n PINCODE: ${pincode}\n  MOBNUMBER: ${mobNumber}\n Name of Items: ${arrName1}\n Quantity: ${arrQuantity1}\n Total Prices: ${totalprice1}`,
            tts:false,
            color:'white',
          }
          
          let  res =await axios.post(webHooKURL,datauser)
        }
        catch(error)
        {
          console.log(error)
        }
      }
      if (checkdealer2=='nilesh'){
        try{
          const datauser={
            content :`--------------------------------------------------->NEW\n TIME :${time} \n STREET: ${shippingAddress}\n CITY: ${city}\n PINCODE: ${pincode}\n  MOBNUMBER: ${mobNumber}\n Name of Items: ${arrName2}\n Quantity: ${arrQuantity2}\n Total Prices: ${totalprice2}`,
            tts:false,
            color:'white',
          }
       
          let  res =await axios.post(webHooKURL1,datauser)
        }
        catch(error)
        {
          console.log(error)
        }
      }
      if (checkdealer2=='amir')
      {
        try{
          const datauser={
            content :`--------------------------------------------------->NEW\n TIME :${time} \n STREET: ${shippingAddress}\n CITY: ${city}\n PINCODE: ${pincode}\n  MOBNUMBER: ${mobNumber}\n Name of Items: ${arrName3}\n Quantity: ${arrQuantity3}\n Total Prices: ${totalprice3}`,
            tts:false,
            color:'white',
          }
         
          let  res =await axios.post(webHooKURL2,datauser)
        }
        catch(error)
        {
          console.log(error)
        }
      }
     
     
      // fetch('https://sheetdb.io/api/v1/sa7ojrpi5otim',{
      //   method:'POST',
      //   headers:{
      //     Accept:'application/json',
      //     "Content-Type":'application/json',
      //   },
      //   body:JSON.stringify({
      //     data:[
      //       {
      //  shippingAddress:shippingAddress,
      //   city:city,
      //   pincode:pincode,
      //   mobNumber:mobNumber
      //       }
      //     ]
      //   })

      // })
      // .then((response)=>response.json())
      // .then((data)=>console.log(data))
      // console.log(item,subtotal);
      dispatch(placeOrder(item,subtotal));
      alert("Your Order Will Be Delivered within 35 minutes")
      window.location.href='/home'
    };
  return (
      <div>
      <h4 className="bg-dark text-light p-2">Order Now</h4>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridnae">
            <Form.Label>street</Form.Label>
            <Form.Control
              type="text"
              placeholder="street"
              value={shippingAddress}
              onChange={(e) => setshippingAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridnae">
            <Form.Label>city</Form.Label>
            <Form.Control
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridnae">
          <Form.Label>pincode</Form.Label>
          <Form.Control
            type="text"
            placeholder="pincode"
            value={pincode}
            onChange={(e) => setpincode(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridnae">
          <Form.Label>Mob number</Form.Label>
          <Form.Control
            placeholder="Mob Number"
            value={mobNumber}
          onChange={(e) => setmobNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" onClick={submitform}>
         Submit
        </Button>
      </Form>
    </div>
  
  )
}
export default Checkout;
