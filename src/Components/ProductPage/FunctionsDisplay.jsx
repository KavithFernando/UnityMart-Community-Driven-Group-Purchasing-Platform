import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    if(localStorage.getItem("userId") !== "null") {
      // Function to check if the current user is in the product
      const checkIfJoined = async () => {
        try {
          // Make API request to check if the user is a participant in the product
          const response = await axios.get(`https://test.atomaxia.com/expressjstest/product/check-participant/${localStorage.getItem("productId")}/${localStorage.getItem("userId")}`);

          // Update isJoined state based on the response
          setIsJoined(response.data.isParticipant);
        } catch (error) {
          console.error("Error checking if user joined:", error);
        }
      };
      // Call the function to check if the user is in the product
      checkIfJoined();
    }
  }, []); // Empty dependency array to run the effect only once on component mount

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

      if(isJoined) {
        leavePurchase();
      } else {
        joinPurchase();
      }
    }
    
  };

  const joinPurchase = async () => {
    try {
      // Calculate updated current value
      const updatedCurrent = reach - to_go + count;
      to_go = to_go - count;

      // Make API request to update product
      const response = await axios.put(`https://test.atomaxia.com/expressjstest/product/join/${localStorage.getItem("productId")}`, {
        userId: localStorage.getItem("userId"),
        current: updatedCurrent,
      });

      // Make API request to update user's purchased products
      const responseUser = await axios.put(`https://test.atomaxia.com/expressjstest/user/purchase/${localStorage.getItem("userId")}`, {
        productId: localStorage.getItem("productId"),
        quantity: count,
      });
  
      // Show success message from the server response
      alert(response.data.success);
      // alert(responseUser.data.success);

      setIsJoined(true);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("The purchase you tried to join was already completed.");
    }
  };

  const leavePurchase = async () => {
    try {
      
      // Make API request to remove purchased product from user's profile and update current value
      const responseUser = await axios.put(`https://test.atomaxia.com/expressjstest/user/remove-purchase/${localStorage.getItem("userId")}`, {
        productId: localStorage.getItem("productId"),
      });

      // Extract the count returned from the server response
      const count = responseUser.data.quantity;

      // Make API request to remove user from the purchase group
      const response = await axios.put(`https://test.atomaxia.com/expressjstest/product/leave/${localStorage.getItem("productId")}`, {
        userId: localStorage.getItem("userId"),
        current: reach - to_go - count,
      });

      to_go = to_go + count;
  
      // Show success message from the server response
      alert(response.data.success);
      // alert(responseUser.data.success);
  
      // Toggle the join status
      setIsJoined(false);
    } catch (error) {
      console.error("Error leaving purchase:", error);
      alert("Failed to leave purchase. Please try again later.");
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