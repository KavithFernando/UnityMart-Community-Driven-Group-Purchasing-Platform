import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import "./PopularPanel.css"
import axios from 'axios';

export default function PopularProduct(
    {
      productId,
      title,
      description,
      reach=0, 
      current=0, 
      price=9999.99, 
      storePrice=9999.99, 
      imageSrc="src/ProductImages/MissingImage.jpg",
      sellerId
    }
  ) 
{

  const [sellerInfo, setSellerInfo] = useState({});
  
  // Use toFixed(2) to format price and storePrice with two decimal places
  const formattedPrice = price.toFixed(2);
  const formattedStorePrice = storePrice.toFixed(2);

  // Calculations-------------------------------------------
  const to_go = reach - current;
  const completed = (current / reach) * 100;
  const discount = Math.round(((storePrice - price) / storePrice) * 100);
  
  // Function to fetch seller details
  const fetchSellerInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${sellerId}`);
      setSellerInfo(response.data);
    } catch (error) {
      console.error('Error fetching seller info00:', error);
    }
  };

  useEffect(() => {
    fetchSellerInfo();
  }, [sellerId]);

  const handleClick = () => {

    // Save the product details to local storage
    localStorage.setItem('productId', productId);
    localStorage.setItem('title', title);
    localStorage.setItem('description', description)
    localStorage.setItem('reach', reach);
    localStorage.setItem('price', price);
    localStorage.setItem('storePrice', storePrice);
    localStorage.setItem('to_go', to_go);
    localStorage.setItem('completed', completed);
    localStorage.setItem('discount', discount);
    localStorage.setItem('sellerName', sellerInfo.name || '');
    localStorage.setItem('sellerUsername', sellerInfo.userName || '');
  };

  return (
      <div className="pop-product">
        <Link to='/product' className='link-area' onClick={handleClick}>
          <img src={imageSrc} alt="Product-Image"/>
          <div className="details">
            <div className='title-card'>{title}</div>
            <div className="progress">
              <div className="reach">Reach {reach}</div>
              <ProgressBar className='progress-bar'
                completed={completed}
                isLabelVisible={false}
                height={8}
                bgColor="#ff5900"
                baseBgColor="#dddddd"
                animateOnRender={true}
              />
              <div className="more">{to_go} more to go</div>
            </div>
            Rs&nbsp;<span className='price-tag'>{formattedPrice}</span>&nbsp;&nbsp;<span className='market-price'>Rs {formattedStorePrice}</span>
            <br />
            <span className='discount'>Hurry up and Save {discount}%</span>
          </div>
        </Link>
      </div>
  )
}
