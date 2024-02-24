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
          current = {125}
          price = {1500}
          storePrice = {2700}
          imageSrc="src/ProductImages/headphones.jpg"
        />
        <PopularProduct
          title = "Magnetic Case For IPhone"
          reach = {530}
          current = {500}
          price = {630}
          storePrice = {1800}
          imageSrc="src/ProductImages/iphoneCase.jpg"
        />
        <PopularProduct
          title = "Compression T-Shirt"
          reach = {200}
          current = {167}
          price = {3250}
          storePrice = {5600}
          imageSrc="src/ProductImages/compressionT.jpeg"
        />
        <PopularProduct
          title = "Pure Sine Wave Inverter"
          reach = {150}
          current = {145}
          price = {11625.50}
          storePrice = {27300.00}
          imageSrc="src/ProductImages/inverter.jpeg"
        />
        <PopularProduct
          title = "Samsung S34 Ultra Phone"
          reach = {100}
          current = {90}
          price = {17500}
          storePrice = {48030}
          imageSrc="src/ProductImages/phone.jpeg"
        />
        <PopularProduct
          title = "Smart Watch"
          reach = {35}
          current = {28}
          price = {10652}
          storePrice = {17300}
          imageSrc="src/ProductImages/smartWatch.jpeg"
        />
        <PopularProduct/>
        <PopularProduct
          title = "Xiaomi Air Humidifier"
          reach = {12}
          current = {7}
          price = {17000}
          storePrice = {22000}
          imageSrc="src/ProductImages/airHumidifier.jpeg"
        />
        <PopularProduct
          title = "Men's Wallet: Pure Leather"
          reach = {90}
          current = {85}
          price = {1150}
          storePrice = {2700}
          imageSrc="src/ProductImages/wallet.jpeg"
        />
        <PopularProduct
          title = "JBl Bluetooth Speaker"
          reach = {170}
          current = {153}
          price = {1622}
          storePrice = {7880}
          imageSrc="src/ProductImages/jbl.jpg"
        />
        <PopularProduct
          title = "Product Title"
          reach = {150}
          current = {90}
          price = {1500}
          storePrice = {2700}
          imageSrc="src/ProductImages/classyShoes.jpeg"
        />
      </Carousel>
        
    </div>
  )
}
