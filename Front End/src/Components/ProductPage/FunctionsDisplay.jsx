import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { IoShareSocial } from "react-icons/io5";
import axios from 'axios';


export default function FunctionsDisplay(
    {
      price,
      reach,
      completed,
      to_go
    }
  ) 
{

  const [count, setCount] = useState(1);
  const [isJoined, setIsJoined] = useState(false);

  const handleInputChange = (e) => {
    const value = Math.max(1, Math.min(to_go, parseInt(e.target.value, 10) || 0));
    setCount(value);
  };

  const handleIncrement = () => {
    if (count < to_go) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleJoinLeave = () => {
    
    if(localStorage.getItem("userId") === "null") {
      alert("You must sign in to join this pruchase group");
    } else {
      // Toggle the join status
      setIsJoined((prevIsJoined) => !prevIsJoined);

      updateProduct();

      // Show alert based on join status
      const alertMessage = isJoined ? "You've Left the Purchase group Successfully" : "You've Joined the Purchase group Successfully";
      alert(alertMessage);
    }
    
  };

  const updateProduct = async () => {
    try {
      // Calculate updated current value
      const updatedCurrent = reach - to_go + count;
      to_go = to_go - count;
  
      // Make API request to update product
      const response = await axios.put(`http://localhost:8080/product/join/${localStorage.getItem("productId")}`, {
        userId: localStorage.getItem("userId"),
        current: updatedCurrent,
      });
  
      // Show success message from the server response
      alert(response.data.success);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again later.");
    }
  };
  
  const formattedPrice = (count*price).toFixed(2);

  return (
    <div className='fuctions-display'>
      <div className="progress">
        <div className="reach">REACH {reach}</div>
        <ProgressBar className='progress-bar'
          completed={completed}
          height={15}
          bgColor="#ff5900"
          baseBgColor="#dddddd"
          animateOnRender={true}
        />
        <div className="available">Only <span>{to_go}</span> more items available</div>
      </div>
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
        <div className="total-display">
          <div className="total">
            TOTAL: Rs
          </div>
          <div className="cal-total">
            &nbsp;{formattedPrice}
          </div>
        </div>
      </div>
      <div className="join-share">
        <div className={`join ${isJoined ? 'leave' : 'join'}`} onClick={handleJoinLeave}>
          {isJoined ? 'Leave Purchase' : 'Join Purchase'}
        </div>
        <div className="share"><IoShareSocial className='share-icon'/>Share</div>
      </div>
    </div>
  )
}