import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';

import "./RecomHolder.css"


export default function RecomProduct({productId, productName, reach, current, discountPrice, description, storePrice,photo, sellerID}) {

  const [sellerInfo, setSellerInfo] = useState({});

  const to_go = reach - current;
  const completed = (current / reach) * 100;
  const discount = Math.round(((storePrice - discountPrice) / storePrice) * 100);

  const formattedPrice = discountPrice.toFixed(2);
  const formattedStorePrice = storePrice.toFixed(2);

  // Function to fetch seller details
  const fetchSellerInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${sellerID}`);
      setSellerInfo(response.data);
    } catch (error) {
      console.error('Error fetching seller info00:', error);
    }
  };

  useEffect(() => {
    fetchSellerInfo();
  }, [sellerID]);

  const handleClick = () => {
    // Save the product details to local storage
    localStorage.setItem('productId', productId);
    localStorage.setItem('title', productName);
    localStorage.setItem('description', description)
    localStorage.setItem('reach', reach);
    localStorage.setItem('price', discountPrice);
    localStorage.setItem('storePrice', storePrice);
    localStorage.setItem('to_go', to_go);
    localStorage.setItem('completed', completed);
    localStorage.setItem('discount', discount);
    localStorage.setItem('sellerName', sellerInfo.name || '');
    localStorage.setItem('sellerUsername', sellerInfo.userName || '');
    localStorage.setItem('photo', photo);
  };

  return (
    <div className='recomProduct-card'>
			<Link to="/Product" className='link-area' onClick={handleClick}>
				<img src={`src/ProductImages/${photo}`} alt="Product-Image" />
				<div className="details">
					<div className='title-card'>{productName}</div>
					<div className="progress">
              		<div className="reach">Reach {reach}</div>
						<ProgressBar className='progress-bar'
							completed={completed}
							isLabelVisible={false}
							height={8}
							bgColor="#ff5900"
							baseBgColor="#dddddd"
							padding="2px"
							animateOnRender={true}
						/>
						<div className="more">{to_go} more to go</div>
					</div>
					<b>Rs</b><span className='price-tag'>{formattedPrice}</span>&nbsp;&nbsp;<span className='market-price'>Rs {formattedStorePrice}</span>
				</div>
				<div className="buttons">
					<div className='button-join'>Join Purchase</div>
				</div>
			</Link>
    </div>
  )
}
