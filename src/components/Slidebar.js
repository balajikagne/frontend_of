import React from 'react'
import "react-bootstrap";
import "react-slideshow-image";
export default function Slidebar() {
  return (
    <div style={{marginTop:'100px'}}>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://scontent.fpnq13-3.fna.fbcdn.net/v/t39.30808-6/396725278_122134860992025132_5596091832507754600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OCzpYIMUURgAX8RYu5I&_nc_ht=scontent.fpnq13-3.fna&oh=00_AfBFxZ_B2phw52fAIjNJrjPlboaf1eMSGzHrqUlKLSc-OQ&oe=654593EF" ></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="pro2.png" ></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="pro3.png" ></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="pro4.png" ></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="p5.png" ></img>
    </div>
  </div>
</div>
    </div>
  )
}
