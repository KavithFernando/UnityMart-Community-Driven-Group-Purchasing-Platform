import React, { useState, useEffect } from "react";
import { AiOutlineStock } from "react-icons/ai";
import "./Sellerdetails.css";
import Sellerproduct from "./sellerproduct";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sellerdetails() {
  const [sellerName, setsellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellingProduct, setsellingProduct] = useState([]);
  const Navigate = useNavigate();

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
    <div className="sellerBody">
      <div className="sellercontainer">
        <div className="sellerusermain">
          <div className="seller-image-container">
            <img
              className="img3"
              src="../src/images/buyer.png"
              alt="User Profile Picture"
            />
          </div>
          <div className="seller-details-container">
            <h3 className="name">Your Details:</h3>
            <h3 className="name">{sellerName}</h3>
            <h3 className="email">{sellerEmail}</h3>
          </div>

          <div className="centerProductAdd">
            <div className="productAddContener">
              <Link to={"/AddOrder"} className="oderAddLink">
                Add Your Order
              </Link>
            </div>
          </div>
        </div>
        <div className="seller-userprop">
          <br />
          <br />
          <h1 className="seller-h1-1">Your pending Bulk Orders</h1>

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

        <div className="chat-bubble" onClick={() => Navigate("/Chat")}>
          <img
            src="src\images\speec.png"
            alt="Chat Icon"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          Chat
        </div>
      </div>
    </div>
  );
}
