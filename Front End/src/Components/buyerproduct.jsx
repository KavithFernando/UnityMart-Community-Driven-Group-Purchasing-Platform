

import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const BuyerProduct = ({ orderName, orderId, progress }) => {
  return (
    <div className='product-card'>
      <div className="image-div">
        
      </div>
      <div className='product-card-details'>
        <p className='product-card-title'>{orderName}</p>
        <p className='product-card-id'>Order ID: {orderId}</p>
        <p className="product-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eum quas libero odit architecto repudiandae temporibus, est, ipsa omnis praesentium, unde rerum nihil tempora dicta ullam dolores ratione sint molestiae!</p>
        <div className="product-card-progress">
          <p className='product-card-reach'>Reach 100</p>
          <ProgressBar className='product-card-bar'
            completed={progress}
            isLabelVisible={true}
            height={13}
            bgColor="#ff5900"
            baseBgColor="#dddddd"
            animateOnRender={true}
          />
        </div>
        
        <p className="product-card-more"><span>20</span> more to go</p>
        <div className="product-card-fullview">View Details</div>
      </div>
    </div>
  );
};

export default BuyerProduct;
