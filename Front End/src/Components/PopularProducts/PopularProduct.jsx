import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import "./PopularPanel.css"

export default function PopularProduct(
    {
      title="Product Title", 
      reach=0, current=0, 
      price=9999.99, 
      storePrice=9999.99, 
      imageSrc="src/ProductImages/MissingImage.jpg"
    }
  ) 
{
  
  // Use toFixed(2) to format price and storePrice with two decimal places
  const formattedPrice = price.toFixed(2);
  const formattedStorePrice = storePrice.toFixed(2);

  // Calculations-------------------------------------------
  const to_go = reach - current;
  const completed = (current / reach) * 100;
  const discount = Math.round(((storePrice - price) / storePrice) * 100);

  return (
      <div className="pop-product">
        <Link to='/product' className='link-area'>
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
                padding="2px"
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
