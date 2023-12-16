import React from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap';
import swal from 'sweetalert2';
function Profile() {
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    function popMessage(){
        swal.fire({
            title: "Cooming Soon",
                  text: "Thank You",
                  icon: "info",
            confirmButtonText: "OK",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
          });
    }
  return (
    <>
    <div style={{display:'inline',justifyContent:'center',alignContent:'center'}}>
    <h4 className="bg-dark text-light p-2">PROFILE</h4>
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}><img src='logo1.png' height={'80px'}></img></div>
        Profile Picture
        <br></br>
        Cooming Soon
        <div style={{textAlign:'left',marginTop:'20px',border:'2px solid orange',borderBottom:'none',borderLeft:'none',borderRight:'none'}}>
        <div style={{display:'flex',marginLeft:'10px',gap:'10px',marginTop:'15px'}}>
        <i style={{marginTop:'4px'}} class="fa-solid fa-user"></i><strong style={{fontSize:'21px',marginTop:'-3px'}}>Name :</strong><h4>{currentUser.name}</h4>
        </div>
        <div style={{display:'flex',marginLeft:'10px',gap:'10px'}}>
        <i style={{marginTop:'4px'}} class="fa-solid fa-phone"></i><strong style={{fontSize:'21px',marginTop:'-3px'}}>Mobile Number :</strong><h4>{currentUser.mobNumber}</h4>
        </div>
        <div style={{display:'flex',marginLeft:'10px',gap:'10px'}}>
        <i style={{marginTop:'4px'}} class="fa-solid fa-city"></i><strong style={{fontSize:'21px',marginTop:'-3px'}}>City :</strong><h4>pune</h4>
        </div>
        <div style={{display:'flex',marginLeft:'10px',gap:'10px'}}>
        <i style={{marginTop:'4px'}} class="fa-solid fa-map-pin"></i><strong style={{fontSize:'21px',marginTop:'-3px'}}>Pincode :</strong><h4>411001</h4>
        </div>
        <div style={{display:'flex',marginLeft:'10px',gap:'10px'}}>
        <i style={{marginTop:'4px'}} class="fa-solid fa-map-pin"></i><strong style={{fontSize:'21px',marginTop:'-3px'}}>Delivery Address :</strong>Coming soon
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
            <button className='btn' onClick={()=>{
                popMessage();
            }}>Edit</button>
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Profile
