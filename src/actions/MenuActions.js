import axios from 'axios';
import swal from 'sweetalert'
export const getAllitems=()=>async dispatch=>{
    dispatch({type:'GET_ITEMS_REQ'})
    try {
        const response=await axios.get('https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems')
        
        dispatch({type:'GET_ITEMS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED",payload : error})
    }
}
export const getAllitems_new=()=>async (dispatch, getState) => {
    dispatch({type:'GET_ITEMS_REQ_NEW'})
    
    try {
        // const response=await axios.get('/api/items/getallitems')
        const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/Notificationlist")////
        console.log(res.data)
        dispatch({type:'GET_ITEMS_SUCCESS_NEW',payload :res.data})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED_NEW",payload : error})
    }
}
export const addItems=(item)=>async (dispatch)=>{
    dispatch({type:'ADD_ITEMS_REQ'})
    
    try {
        const response=await axios.post('https://tiny-lime-squid-tie.cyclic.app/api/items/additem',item)
    
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
        const response=await axios.post('https://tiny-lime-squid-tie.cyclic.app/items/getitembyid',item)
      
        dispatch({type:'GET_ITEMBYID_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_ITEMBYID_FAILED",payload : error})
        console.log("error side")
    }
}


export const deleteItem=(itemId)=>async (dispatch)=>{
    console.log({itemId})
    try {
        const response=await axios.post('https://tiny-lime-squid-tie.cyclic.app/api/items/deleteitem',{itemId})
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
        const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
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
        const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
           if (category==='all')
           {
            filterdItem1=res.data
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
export const filterP=(searchkey,category)=>async dispatch=>{
    
    dispatch({type:'GET_ITEMS_REQ'})
      let  filterdItem1;
    //   console.log('hellow')
    try{
        console.log(searchkey,category)
        
            
           if (searchkey==='low to high' && category==='all')
           {
            const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
            // filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=res.data.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices[0].half), parseFloat(a.prices[0].full));
                const lowestPriceB = Math.min(parseFloat(b.prices[0].half), parseFloat(b.prices[0].full));
  
                return lowestPriceA - lowestPriceB;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
           else if (searchkey=='low to high' && category!=='all')
           {
            const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=filterdItem1.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices[0].half), parseFloat(a.prices[0].full));
                const lowestPriceB = Math.min(parseFloat(b.prices[0].half), parseFloat(b.prices[0].full));
  
                return lowestPriceA - lowestPriceB;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
           else if (searchkey=='high to low' && category!=='all')
           {
            const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=filterdItem1.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices[0].half), parseFloat(a.prices[0].full));
                const lowestPriceB = Math.min(parseFloat(b.prices[0].half), parseFloat(b.prices[0].full));
  
                return lowestPriceB - lowestPriceA;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
           else if (searchkey==='high to low' && category==='all'){
            const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
            // filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            let filter2=res.data.sort((a, b) => {
                const lowestPriceA = Math.min(parseFloat(a.prices[0].half), parseFloat(a.prices[0].full));
                const lowestPriceB = Math.min(parseFloat(b.prices[0].half), parseFloat(b.prices[0].full));
  
                return lowestPriceB - lowestPriceA;
              })
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filter2})
            return;
           }
          else{
            const res=await axios.get("https://tiny-lime-squid-tie.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem1})
          }
       
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
