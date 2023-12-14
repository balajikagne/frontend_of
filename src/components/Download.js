import React from "react";
import application from './testygo.apk'
export default function Download() {
  return (
    <>
     <div style={{display:'inline',justifyContent:'center',alignItems:'center'}}>
        <h4 style={{fontSize:'40px'}}>Download App NOW</h4><br></br>
         <div>
        <li className="nav-item">
              <a className="dbtn" href={application} download='testygo.apk' target="_blank" rel="noreferrer" >
                <i class="fa-solid fa-download" style={{fontSize:'40px',paddingRight:'10px'}}></i>Download App
              </a>
            </li>
        </div>
        <p>Introducing TestyGo, your ultimate food delivery companion! Savor the convenience of a seamless culinary experience at your fingertips. Our app offers a delectable array of restaurants, ensuring a diverse palette of flavors to satisfy every craving. With user-friendly navigation, swift order placement, and real-time tracking, TestyGo ensures your favorite meals arrive fresh and fast. Elevate your dining journey with our intuitive interface, exclusive deals, and reliable delivery service. TestyGo: where culinary delight meets convenience, making every meal an experience to remember.</p>
        <img src="logo1.png" height={'100px'}></img>
        <h3 style={{fontSize:'40px'}}>TestyGo</h3>
     </div>
    </>
  );
}
