import React, { useState, useEffect } from "react";
import { AiOutlineStock } from "react-icons/ai";
import "./Sellerdetails.css";
import Sellerproduct from "./sellerproduct";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sellerdetails() {
  const [sellerName, setsellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellingProduct, setsellingProduct] = useState([]);

  const loadSellerData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/seller/${localStorage.getItem("userId")}`
      );

      setsellerName(data.data.name);
      setSellerEmail(data.data.email);
    } catch (err) {
      console.log(err);
    }
  };

  const loadSellersProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/products/${localStorage.getItem("userId")}`
      );
      // console.log(data);
      setsellingProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadSellerData();
    loadSellersProduct();
  });

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
          <h3 className="name">Your Details:</h3>
        </div>
        <div className="details-container">
        <img
          src="src\images\add icon.png"
          alt="Chat Icon"
          style={{ width: "20px", height: "20px", marginRight: "12px", marginLeft: "100px" }}
        />
          <Link to={"/AddOrder"}>Add Your Order</Link>
        </div>
      </div>
      <div className="userprop">
        <br />
        <br />
        <h1 className="h1-1">Your pending Bulk Orders</h1>

        <br />
        <div className=" sellerprod">
          {sellingProduct.map((product, index) => (
            <Sellerproduct
              key={index}
              name={product.productName}
              id={product._id}
              desc={product.description}
              img={product.photo}
              reach={product.reach}
              current={product.current}
            />
          ))}
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
  );
}
