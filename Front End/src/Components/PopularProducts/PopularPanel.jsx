import React from 'react'
import "./PopularPanel.css"
import Carousel from 'react-multi-carousel';
import PopularProduct from './PopularProduct';
import 'react-multi-carousel/lib/styles.css';

export default function PopularPanel() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='pop-panel'>
      <Carousel
        className='carousel'
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
      >
        <PopularProduct/>
        <PopularProduct/>
        <PopularProduct/>
        <PopularProduct/>
        <PopularProduct/>
        <PopularProduct/>
        <PopularProduct/>
      </Carousel>
        
    </div>
  )
}
