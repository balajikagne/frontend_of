import axios from 'axios';
import swal from 'sweetalert'
export const getAllitems=()=>async dispatch=>{
    dispatch({type:'GET_ITEMS_REQ'})
    try {
        const response=await axios.get('https://balajibackend-demo-1.onrender.com/api/items/getallitems')
        
        dispatch({type:'GET_ITEMS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED",payload : error})
    }
}

export const addItems=(item)=>async (dispatch)=>{
    dispatch({type:'ADD_ITEMS_REQ'})
    
    try {
        const response=await axios.post('https://balajibackend-demo-1.onrender.com/api/items/additem',item)
    
        dispatch({type:'ADD_ITEMS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"ADD_ITEMS_FAILED",payload : error})
        console.log("error side")
    }
}

export const getItemById=(item)=>async (dispatch)=>{
    dispatch({type:'GET_ITEMBYID_REQ'})
    console.log(item);
    try {
        const response=await axios.post('https://balajibackend-demo-1.onrender.com/api/items/getitembyid',item)
      
        dispatch({type:'GET_ITEMBYID_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_ITEMBYID_FAILED",payload : error})
        console.log("error side")
    }
}


export const deleteItem=(itemId)=>async (dispatch)=>{
    console.log({itemId})
    try {
        const response=await axios.post('https://balajibackend-demo-1.onrender.com/api/items/deleteitem',{itemId})
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
        const res=await axios.get("https://balajibackend-demo-1.onrender.com/api/items/getallitems")
        filterdItem=res.data.filter(item => item.name.toLowerCase().includes(searchkey))
        // if (category!=='all'){
        //     filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
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
        const res=await axios.get("https://balajibackend-demo-1.onrender.com/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
           if (category==='all')
           {
            window.location.href="/home";
           }
           else if (category==='')
           {
            window.location.href='/home';
           }
        dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem1})
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
