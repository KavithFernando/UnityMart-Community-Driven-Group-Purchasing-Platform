

import React from 'react';
import ProgressBar from './ProgressBar';
import './buyerproducr.css';

const BuyerProduct = ({ orderName, orderId, progress }) => {
  return (
    <div className='prop-c1'>
      <div className='prop-c2'>
        <p><p className='p-1'>Order Name:</p> {orderName}</p><br/>
        <p><p className='p-1'>Order ID is:</p> {orderId}</p><br/>
        <ProgressBar progress={progress} />
        <button>leave queue</button>
      </div>
    </div>
  );
};

export default BuyerProduct;
