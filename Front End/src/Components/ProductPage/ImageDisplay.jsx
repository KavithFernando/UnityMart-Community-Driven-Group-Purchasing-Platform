import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function ImageDisplay() {

  return (
    <div className='image-display'>
      <div className='main img' src="../src/images/shoe2.jpg" alt=""/>
      <div className='chilimg'>
      <img className="imgdis1" src="../src/images/shoe2.jpg" alt="" />
      <img className="imgdis1" src="../src/images/shoe3.png" alt="" />
      <img className="imgdis1" src="../src/images/shoe2.jpg" alt="" />
      </div>
      
			
    </div>
  )
}