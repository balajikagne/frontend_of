import React from 'react'
import "react-bootstrap";
export default function Slidebar() {
  return (
    <div style={{marginTop:'100px'}}>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.canva.com/design/DAFz6LMaq50/A_yrohQkJu9LabAEthqrRQ/edit?utm_content=DAFz6LMaq50&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="pro2.png" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="pro3.png" alt="Third slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="pro4.png" alt="Third slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="p5.png" alt="Third slide"></img>
    </div>
  </div>
</div>
    </div>
  )
}
