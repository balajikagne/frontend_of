import axios from 'axios';
import swal from 'sweetalert2'
export const registerUser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQ' });

    try {
        const response = await axios.post('https://balajibackend-demo-1.onrender.com/api/users/register', user);
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
        const response2 = await axios.post('https://balajibackend-demo-1.onrender.com/api/users/login', user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response2.data });
        localStorage.setItem('currentUser', JSON.stringify(response2.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error.message });
        // Consider handling different types of errors more specifically
    }
};

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:'USER_LOGIN_REQ'})

    try{
        const response=await axios.post('https://balajibackend-demo-1.onrender.com/api/users/login',user)
        // console.log(response)
        dispatch({type:'USER_LOGIN_SUCCESS',payload: response.data})
        localStorage.setItem('currentUser',JSON.stringify(response.data))
       swal.fire({
                title: "Login successfully",
                text: "Thank You",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result)=>{
                if (result.isConfirmed){
                    window.location.href='/cart'
                }
                else{
                    window.location.href='/cart'
                }
              })
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload:error})
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/home';
}

