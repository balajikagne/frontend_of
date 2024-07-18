import axios from 'axios';
import swal from 'sweetalert'
import Menus from "../Menu";
export const getAllitems=()=>async dispatch=>{
    dispatch({type:'GET_ITEMS_REQ'})
    try {
        const response=Menus;
        
        dispatch({type:'GET_ITEMS_SUCCESS',payload :response})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED",payload : error})
    }
}
export const getPolls=()=>async dispatch=>{
    dispatch({type:'GET_POLLS_REQ'})
    try {
        const response=await axios.get('http://127.0.0.1:5000/api/items/api/polls')
        dispatch({type:'GET_POLLS_SUCCESS',payload :response})
    }catch(error){
        dispatch({type:"GET_POLLS_FAILED",payload : error})
    }
}
export const submitVote = (pollId, option) => async (dispatch) => {
  dispatch({ type: 'SUBMIT_VOTE_REQ' });

  try {
    const response = await axios.post(`http://127.0.0.1:5000/api/items/api/vote/${pollId}/${option}`, {
      option,
    });


    dispatch({ type: 'SUBMIT_VOTE_SUCCESS', payload: response });
  } catch (error) {
    dispatch({ type: 'SUBMIT_VOTE_FAILED', payload: error });
  }
};
export const getAllitems_new=()=>async (dispatch, getState) => {
    dispatch({type:'GET_ITEMS_REQ_NEW'})
    
    try {
        // const response=await axios.get('/api/items/getallitems')
        const res=await axios.get("http://127.0.0.1:5000/api/items/Notificationlist")////
        dispatch({type:'GET_ITEMS_SUCCESS_NEW',payload :res})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED_NEW",payload : error})
    }
}
export const addItems=(item)=>async (dispatch)=>{
    dispatch({type:'ADD_ITEMS_REQ'})
    
    try {
        const response=await axios.post('http://127.0.0.1:5000/api/items/additem',item)
    
        dispatch({type:'ADD_ITEMS_SUCCESS',payload :response})
    }catch(error){
        dispatch({type:"ADD_ITEMS_FAILED",payload : error})
        console.log("error side")
    }
}

export const getItemById=(item)=>async (dispatch)=>{
    dispatch({type:'GET_ITEMBYID_REQ'})
    try {
        const response=await axios.post('http://127.0.0.1:5000/items/getitembyid',item)
      
        dispatch({type:'GET_ITEMBYID_SUCCESS',payload :response})
    }catch(error){
        dispatch({type:"GET_ITEMBYID_FAILED",payload : error})
    }
}


export const deleteItem=(itemId)=>async (dispatch)=>{
    try {
        const response=await axios.post('http://127.0.0.1:5000/api/items/deleteitem',{itemId})
        swal("Item deleted successfully")
        window.location.href="/admin/itemlist"
        
    }catch(error){
        swal("Error while deleting Items")
    }
}

export const filterItem=(searchkey,category)=>async dispatch=>{
    let filterdItem;
    // let filterdItem1;
    
    dispatch({type:'GET_ITEMS_REQ'})
    try{
        const res=Menus;
        filterdItem=res.filter(item => item.name.toLowerCase().includes(searchkey))
        // if (category!=='all'){
        //     filterdItem1=res.filter(item=>item.category.toLowerCase()===category);
        // }
        dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem})
       
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
export const filterI=(category)=>async dispatch=>{
    
    dispatch({type:'GET_ITEMS_REQ'})
      let  filterdItem1;
    try{
        // console.log(category)
        const res=Menus;
            filterdItem1=res.filter(item=>item.category.toLowerCase()===category);
           if (category==='all')
           {
            filterdItem1=res
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem1})
            return
           }
           else if (category==='')
           {
            window.location.href='/';
           }
        dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem1})
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
