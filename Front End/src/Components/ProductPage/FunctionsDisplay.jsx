import React, { useState } from 'react'

export default function FunctionsDisplay() {

  const [count, setCount] = useState(1);

  const handleInputChange = (e) => {
    const value = Math.max(1, Math.min(100, parseInt(e.target.value, 10) || 0));
    setCount(value);
  };

  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='fuctions-display'>
      <div className="quantity">
        <div className="title">Quantity</div>
        <div className="buttons-and-text">
          <div className="minus" onClick={handleDecrement}>-</div>
          <input 
            type="number" 
            className='count' 
            value={count} 
            onChange={handleInputChange}
            min="1"
            max="100"
            inputMode="numeric"/>
          <div className="plus" onClick={handleIncrement}>+</div>
        </div>
      </div>
      <div className="progress">
        <div className="reach">REACH 150</div>
      </div>
    </div>
  )
}
