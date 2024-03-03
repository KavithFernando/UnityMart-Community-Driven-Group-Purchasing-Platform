

import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const BuyerProduct = ({ orderName, orderId, reach=100, to_go=20 }) => {

  const progress = ((reach - to_go) / reach) * 100

  return (
    <div className='product-card'>
      <div className="image-div">
        <img src="src\ProductImages\shoes.jpeg" alt="Product Image" />
      </div>
      <div className='product-card-details'>
        <p className='product-card-title'>{orderName}</p>
        <p className='product-card-id'>Order ID: {orderId}</p>
        <p className="product-card-description">Lorem, ipsum dolor sit nigg er amet consectetur adipisicing elit. Placeat repellat perferendis assumenda praesentium dolores est, maxime sunt, ratione, aliquid deserunt adipisci aspernatur? Aliquid perspiciatis voluptas, blanditiis similique maxime omnis officiis fuga veritatis nobis illum, repellat sint. Mollitia molestias omnis facilis voluptates neque est hic repudiandae.</p>
        <div className="product-card-progress">
          <p className='product-card-reach'>Reach {reach}</p>
          <ProgressBar className='product-card-bar'
            completed={progress}
            isLabelVisible={true}
            height={13}
            bgColor="#ff5900"
            baseBgColor="#dddddd"
            animateOnRender={true}
          />
        </div>
        
        <p className="product-card-more"><span>{to_go}</span> more to go</p>
        <div className="product-card-fullview">View Details</div>
      </div>
    </div>
  );
};

export default BuyerProduct;
