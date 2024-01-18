import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
const aboutUs = () => {
  
  return (
    <>
<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">About us page</h1>
       
        <p className="lead text-muted"><a href="/" className="text-muted"> 
                    <u>Order Now</u></a>
        </p>
        
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"></img></div>
    </div>
  </div>
</div>

<footer style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='finfo'>
            <li><a href="https://instagram.com/testygo_24?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" title="instgram"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61550753962340" title="facebook"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/testygo/likes" title="twitter"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://wa.me/919309100534?text=At%20TestyGo%2C%20we're%20here%20to%20assist%20you%20every%20step%20of%20the%20way.%20If%20you%20have%20any%20questions%2C%20need%20help%20with%20your%20order%2C%20or%20simply%20want%20to%20chat%20with%20us%2C%20feel%20free%20to%20start%20a%20conversation%20right%20here!%0A%0A%F0%9F%93%A3%20To%20chat%20with%20us%3A%0A1.%20Click%20on%20the%20chat%20icon%20in%20the%20bottom%20right%20corner.%0A2.%20Type%20your%20message%20and%20hit%20send.%0A%0AWe're%20here%20to%20make%20your%20experience%20exceptional%2C%20so%20don't%20hesitate%20to%20reach%20out.%20We%20can't%20wait%20to%20chat%20with%20you!%0A%0A%20%20Best%20regards%2C%0A%5BTestyGo%20Support%20Team%5D" title="Our Support"><i className="fa-brands fa-whatsapp"></i></a></li>
            <p>Copyright © 2023 TermsFeed®. All rights reserved.</p>
        </div>
       </footer>
    </>
  )
}

export default aboutUs
