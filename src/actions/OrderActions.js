import axios from "axios";
export const placeOrder = (token, subtotal,checker) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQ" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().addtoCartReducer.cartItems;
  try {
    const res = await axios.post("https://gifted-apron-toad.cyclic.app/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
     if (checker===true)
     {
      window.location.href='/orders';
     }
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};
export const getUserOrders=()=>async (dispatch,getState)=>{
  const currentUser=getState().loginUserReducer.currentUser;
  dispatch({type:"USER_ORDER_REQ",
});
try{
  const response=await axios.post("https://gifted-apron-toad.cyclic.app/api/orders/getuserorder",{
    userid:currentUser._id,
  });
 
  dispatch({type:"USER_ORDER_SUCCESS",payload:response.data});
}
catch(error)
{
  dispatch({type:"USER_ORDER_FAILED",payload:error})
}
};
export const getALLOrders = () => async (dispatch,getState) => {
    dispatch({ type: "ALL_ORDER_REQ" });
    try {
      const res = await axios.get("https://gifted-apron-toad.cyclic.app/api/orders/getallorders");
      dispatch({ type: "ALL_ORDER_SUCCESS" ,payload:res.data});
      
    } catch (error) {
      dispatch({ type: "ALL_ORDER_FAILED",payload:error });
      console.log("error side")
    }
  };

  export const deliveredOrders = (orderid) => async (dispatch,getState) => {
    dispatch({ type: "GET_ALL_ORDER_REQ" });
    try {
      const res = await axios.post("https://gifted-apron-toad.cyclic.app/api/orders/deliverorder",{orderid});
      const orders=await  axios.get("https://gifted-apron-toad.cyclic.app/api/items/getallitems")
      dispatch({ type: "GET_ALL_ORDER_SUCCESS" ,payload:orders.data});
      window.location.href="/admin/orderlist"
    } catch (error) {
      dispatch({ type: "GET_ALL_ORDER_FAILED",payload:error });
      console.log("error side")
    }
  };

  export const StockIn = (itemId) => async (dispatch,getState) => {
    dispatch({type:'GET_ITEMS_REQ'});
    try {
      const res = await axios.post("https://gifted-apron-toad.cyclic.app/api/items/itemlistin",{itemId});
      const orders=await  axios.get("https://gifted-apron-toad.cyclic.app/api/items/getallitems")
      dispatch({type:'GET_ITEMS_SUCCESS',payload:orders.data});
      // window.location.href="/admin/itemlist"
    } catch (error) {
      dispatch({type:'GET_ITEMS_FAILED',payload:error});
      console.log("error side")
    }
  };

  export const StockOut = (itemId) => async (dispatch,getState) => {
    dispatch({type:'GET_ITEMS_REQ'});
    try {
      const res = await axios.post("https://gifted-apron-toad.cyclic.app/api/items/itemlistout",{itemId});
      const orders=await  axios.get("https://gifted-apron-toad.cyclic.app/api/items/getallitems")
      dispatch({type:'GET_ITEMS_SUCCESS',payload:orders.data});
      // window.location.href="/admin/itemlist"
    } catch (error) {
      dispatch({type:'GET_ITEMS_FAILED',payload:error});
      console.log("error side")
    }
  };
