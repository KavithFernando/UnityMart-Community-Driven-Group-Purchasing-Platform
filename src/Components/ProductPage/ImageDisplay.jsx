import React, { useState } from 'react';
import './Product.css';

export default function ImageDisplay({photo}) {
  const [mainImage, setMainImage] = useState(`../src/ProductImages/${photo}`); 

  
  const handleImageClick = (newImage) => {
    setMainImage(newImage); 
  };

  return (
    <div className='image-display'>
      <img className='main_img' src={mainImage} alt="Main Product Image" /> 
      <div className='chilimg'>       
        <img className="imgdis1" src={`../src/ProductImages/${photo}`} alt="" onClick={() => handleImageClick(`../src/ProductImages/${photo}`)} />
        <img className="imgdis1" src={`../src/ProductImages/${photo}`} alt="" onClick={() => handleImageClick(`../src/ProductImages/${photo}`)} />
        <img className="imgdis1" src={`../src/ProductImages/${photo}`} alt="" onClick={() => handleImageClick(`../src/ProductImages/${photo}`)} />
        <img className="imgdis1" src={`../src/ProductImages/${photo}`} alt="" onClick={() => handleImageClick(`../src/ProductImages/${photo}`)} />
      </div>
    </div>
  );
}