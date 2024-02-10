import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
const TeamMember = ({ name, imageSrc, description,linkedinUrl  }) => (
  <div style={{ textAlign: "center", fontFamily: "'Arial', sans-serif" }}>
    <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
      {name}
    </h3>
    <img src={imageSrc} alt={`${name} Image`} width="200" style={{ display: "block", margin: "0 auto", maxWidth: "100%", height: "auto" }} />
    {linkedinUrl && (
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin" style={{fontSize:"40px",marginTop:'20px'}}></i>
      </a>
    )}
    <p style={{ fontSize: "18px", color: "#555" }}>{description}</p>
    
  </div>
);
const aboutUs = () => {
  
  return (
    <>
     <div>
    <TeamMember
      name="Balaji Kagne (Founder)"
      imageSrc="https://media.licdn.com/dms/image/D4D03AQEO94m4Mi3_wQ/profile-displayphoto-shrink_400_400/0/1689003547275?e=1712793600&v=beta&t=Fmxeui3wYUjhUQVtPA03pDJ_GB30EJI8zVh_IhZobHA" // Replace with actual image source
      linkedinUrl="https://www.linkedin.com/in/balaji-kagne-777a40222/" // Replace with actual LinkedIn URL
      description="Meet Balaji Kagne, the visionary founder of Testygo, the go-to food delivery platform. Balaji is the coding genius behind our platform, translating innovative ideas into seamless user experiences. His dedication to crafting efficient and user-friendly solutions makes Testygo a leader in the food delivery industry."
    />

    <TeamMember
      name="Nilesh Kadam (Co-Founder)"
      imageSrc="https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/410811558_1514198539380529_106832668786001308_n.jpg?ccb=11-4&oh=01_AdTC-Hv-aqYA1T_7rdkPgtJgsQtuNCgJRe2fiC9aUenZng&oe=65D222C1&_nc_sid=e6ed6c&_nc_cat=104" // Replace with actual image source
      linkedinUrl="https://www.linkedin.com/in/nilesh-kadam/" // Replace with actual LinkedIn URL
      description="Nilesh Kadam, our marketing maestro at Testygo, collaborates with Balaji to make your food delivery experience extraordinary. While Balaji focuses on coding and bringing fresh ideas to Testygo, Nilesh ensures that our platform's message reaches food enthusiasts far and wide. Together, they create a dynamic duo, combining technical excellence with effective marketing strategies to make Testygo your preferred food delivery destination."
    />
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
