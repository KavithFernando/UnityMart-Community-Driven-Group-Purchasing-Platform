import React from 'react'
import "./PopularPanel.css"
import Carousel from 'react-multi-carousel';
import PopularProduct from './PopularProduct';
import 'react-multi-carousel/lib/styles.css';

export default function PopularPanel() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 6
    },
    middle1: {
      breakpoint: { max: 1300, min: 1200 },
      items: 5
    },
    middle2: {
      breakpoint: { max: 1200, min: 750 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 3
    },
    middle3: {
      breakpoint: { max: 750, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  return (
    <div className='pop-panel'>
      <div className="pop-product-title">Most Popular Deals of this Week</div>
      <Carousel
        className='carousel'
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
      >
        <PopularProduct
          title = "Bluetooth Wireless Headset"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
          imageSrc="src/ProductImages/headphones.jpg"
        />
        <PopularProduct/>
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
        />
      </Carousel>
        
    </div>
  )
}
