import React from 'react'
import "react-bootstrap";
import ImagesSlider from './ImagesSlider';
import { slideImages } from './Imagses';
export default function Slidebar() {
  return (
    <ImagesSlider slides={slideImages}/>
  )
}
