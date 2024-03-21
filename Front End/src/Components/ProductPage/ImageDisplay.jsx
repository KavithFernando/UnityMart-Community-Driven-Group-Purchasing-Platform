import React, { useState } from 'react';
import './Product.css';

export default function ImageDisplay({photo}) {
  const [mainImage, setMainImage] = useState(`../src/images/${photo}`); 

  
  const handleImageClick = (newImage) => {
    setMainImage(newImage); 
  };

  return (
    <div className='image-display'>
      <img className='main_img' src={mainImage} alt="Main Product Image" /> 
      <div className='chilimg'>       
        <img className="imgdis1" src={`../src/images/${photo}`} alt="" onClick={() => handleImageClick("../src/images/shoe2.jpg")} />
        <img className="imgdis1" src={`../src/images/${photo}`} alt="" onClick={() => handleImageClick("../src/images/shoe3.png")} />
        <img className="imgdis1" src={`../src/images/${photo}`} alt="" onClick={() => handleImageClick("../src/images/shoe2.jpg")} />
      </div>
    </div>
  );
}