import React, { useEffect, useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import "./Sellerdetails.css";
import Sellerproduct from "./sellerproduct";
import axios from "axios";

export default function sellerdetails() {
  return (
    <div className="container">
      <div className="usermain">
        <div className="image-container">
          <img
            className="img1"
            src="../src/images/buyer.png"
            alt="User Profile Picture"
          />
        </div>
        <div className="details-container">
          <h3 className="name">ggg</h3>
          <h3 className="email">ggg</h3>
        </div>
      </div>
      <div className="userprop">
        <br />
        <br />
        <h1 className="h1-1">Your pending Bulk Orders</h1>
        <br />
        <div className=" sellerprod">
          <Sellerproduct/>
          <Sellerproduct/>
          <Sellerproduct/>
          <Sellerproduct/>
        </div>
      </div>

      <div className="prediction">
        <AiOutlineStock className="stock" />
        <span className="sales-pred">&nbsp;&nbsp;Sales Prediction</span>
      </div>

      <div className="chat-bubble">
        <img
          src="src\images\speec.png"
          alt="Chat Icon"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        Chat
      </div>
    </div>
  )
}
