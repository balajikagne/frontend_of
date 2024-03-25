import axios from 'axios';
import swal from 'sweetalert'
export const getAllitems=()=>async (dispatch, getState) => {
    dispatch({type:'GET_ITEMS_REQ'})
    const currentUser = getState().loginUserReducer.currentUser;
    
    let filterdlocation;////
    let location=currentUser.location////
    
    try {
        // const response=await axios.get('/api/items/getallitems')
        const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")////
        filterdlocation=res.data.filter(item=>item.location.toLowerCase().includes(location));////
        dispatch({type:'GET_ITEMS_SUCCESS',payload :filterdlocation})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED",payload : error})
    }
}
export const getAllitems_new=()=>async (dispatch, getState) => {
    dispatch({type:'GET_ITEMS_REQ_NEW'})
    
    try {
        // const response=await axios.get('/api/items/getallitems')
        const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/Notificationlist")////
        console.log(res.data)
        dispatch({type:'GET_ITEMS_SUCCESS_NEW',payload :res.data})
    }catch(error){
        dispatch({type:"GET_ITEMS_FAILED_NEW",payload : error})
    }
}
export const addItems=(item)=>async (dispatch)=>{
    dispatch({type:'ADD_ITEMS_REQ'})
    
    try {
        const response=await axios.post('https://zany-clam-sundress.cyclic.app/api/items/additem',item)
    
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
        const response=await axios.post('https://zany-clam-sundress.cyclic.app/items/getitembyid',item)
      
        dispatch({type:'GET_ITEMBYID_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:"GET_ITEMBYID_FAILED",payload : error})
        console.log("error side")
    }
}


export const deleteItem=(itemId)=>async (dispatch)=>{
    console.log({itemId})
    try {
        const response=await axios.post('https://zany-clam-sundress.cyclic.app/api/items/deleteitem',{itemId})
        swal("Item deleted successfully")
        window.location.href="/admin/itemlist"
        
    }catch(error){
        swal("Error while deleting Items")
    }
}

export const filterItem=(searchkey)=>async (dispatch, getState)=>{
    dispatch({type:'GET_ITEMS_REQ'})
    const currentUser = getState().loginUserReducer.currentUser;
    
    let filterdlocation;////
    let location=currentUser.location
      let  filterdItem1;
            let filterdItem2;////
    try{
        // console.log(category)
        const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.name.toLowerCase().includes(searchkey));////
            console.log(filterdItem1,'hellow');////

            filterdItem2=filterdItem1.filter(item=>item.location.toLowerCase()===location);////
            // if (filterdItem1!==null){////
            //      filterdItem2=filterdItem1.filter(item=>item.location.toLowerCase()===location);////
            //      if (filterdItem2.length===0){
            //         swal.fire({
            //             title: "those items are not availble in this area",
            //                   text: "Thank You",
            //                   icon: "info",
            //             confirmButtonText: "OK",
            //           }).then((result) => {
            //             /* Read more about isConfirmed, isDenied below */
            //             if (result.isConfirmed) {
            //               window.location.href='/'
            //             }
            //           });
            //        }
            //        else{
            //         console.log("done")
            //         dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem2})
            //        }
            // }////
        //     if (category==='all')
        //    {
        //     const res=await axios.get("https://balajibackend-demo-1.onrender.com/api/items/getallitems")////
        // filterdlocation=res.data.filter(item=>item.location.toLowerCase().includes(location));////
        // dispatch({type:'GET_ITEMS_SUCCESS',payload :filterdlocation})
        // console.log('all')
        // return;
        //    }
        //    else if (category==='')
        //    {
        //     // window.location.href='/';
        //     console.log('nothing')

        //    }
        
        dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem2})////
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
export const filterI=(category)=>async (dispatch, getState)=>{
    
    dispatch({type:'GET_ITEMS_REQ'})
    const currentUser = getState().loginUserReducer.currentUser;
    
    let filterdlocation;////
    let location=currentUser.location
      let  filterdItem1;
            let filterdItem2;////
    try{
        // console.log(category)
        const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            console.log(filterdItem1,'hellow');////

            filterdItem2=filterdItem1.filter(item=>item.location.toLowerCase()===location);////
            // if (filterdItem1!==null){////
            //      filterdItem2=filterdItem1.filter(item=>item.location.toLowerCase()===location);////
            //      if (filterdItem2.length===0){
            //         swal.fire({
            //             title: "those items are not availble in this area",
            //                   text: "Thank You",
            //                   icon: "info",
            //             confirmButtonText: "OK",
            //           }).then((result) => {
            //             /* Read more about isConfirmed, isDenied below */
            //             if (result.isConfirmed) {
            //               window.location.href='/'
            //             }
            //           });
            //        }
            //        else{
            //         console.log("done")
            //         dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem2})
            //        }
            // }////
            if (category==='all')
           {
            const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")////
        filterdlocation=res.data.filter(item=>item.location.toLowerCase().includes(location));////
        dispatch({type:'GET_ITEMS_SUCCESS',payload :filterdlocation})
        console.log('all')
        return;
           }
           else if (category==='')
           {
            // window.location.href='/';
            console.log('nothing')

           }
        
        dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem2})////
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
            const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
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
            const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
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
            const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
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
            const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
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
            const res=await axios.get("https://zany-clam-sundress.cyclic.app/api/items/getallitems")
            filterdItem1=res.data.filter(item=>item.category.toLowerCase()===category);
            dispatch({type:'GET_ITEMS_SUCCESS',payload:filterdItem1})
          }
       
    }
    catch(error){
        dispatch({type:'GET_ITEMS_FAILED',payload:error});
        console.log(error)
    }
}
