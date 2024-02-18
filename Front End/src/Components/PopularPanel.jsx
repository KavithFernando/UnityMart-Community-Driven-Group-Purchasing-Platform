import React from 'react'
import "./PopularPanel.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PopularPanel() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
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
        autoPlay={true}
      >
        <div className='blah'>Item 1</div>
        <div className='blah'>Item 2</div>
        <div className='blah'>Item 3</div>
        <div className='blah'>Item 4</div>
        <div className='blah'>Item 5</div>
        <div className='blah'>Item 6</div>
        <div className='blah'>Item 7</div> 
      </Carousel>
        
    </div>
  )
}
