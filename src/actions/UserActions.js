import axios from 'axios';
export const registerUser=(user)=>async dispatch=>{
    dispatch({type:'USER_REGISTER_REQ'})
    try{
        const response=await axios.post('https://balajibackend-demo-1.onrender.com/api/users/register',user)
        
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }
    catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:'USER_LOGIN_REQ'})

    try{
        const response=await axios.post('https://balajibackend-demo-1.onrender.com/api/users/login',user)
        // console.log(response)
        dispatch({type:'USER_LOGIN_SUCCESS',payload: response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
        window.location.href='/home'
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload:error})
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/home';
}

