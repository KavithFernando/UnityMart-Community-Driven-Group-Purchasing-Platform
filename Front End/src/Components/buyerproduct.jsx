

import React from 'react';
import ProgressBar from './ProgressBar';

const BuyerProduct = ({ orderName, orderId, progress }) => {
  return (
    <div className='prop-c1'>
      <div className='prop-c2'>
        <p>order name: {orderName}</p>
        <p>order id is: {orderId}</p>
        <ProgressBar progress={progress} />
        <button>leave queue</button>
      </div>
    </div>
  );
};

export default BuyerProduct;
