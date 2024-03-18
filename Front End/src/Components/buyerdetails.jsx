import React, { useEffect, useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import "./Buyerdetails.css";
import BuyerProduct from "./buyerproduct";
import axios from "axios";

export default function Buyerdetails() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [buyerProduct, setBuyProduct] = useState([]);

  const cartProduct = localStorage.getItem("Cart");
  const array = cartProduct.split(",");

  const loadBuyerData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/buyer/${localStorage.getItem("userId")}`
      );
      //console.log(data.key);
      setname(data.data.name);
      setEmail(data.data.email);

      //localStorage.setItem("Cart", data.key);
      //console.log(localStorage.getItem("Cart"));
    } catch (err) {
      console.log(err);
    }
  };
  const userCartProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/get/queProducts",
        {
          ids: array,
        }
      );

      //console.log(data.product);
      setBuyProduct(data.product);
      //console.log(buyerProduct);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userCartProduct();
    loadBuyerData();
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
          <h3 className="name">{name}</h3>
          <h3 className="email">{email}</h3>
        </div>
      </div>
      <div className="userprop">
        <br />
        <br />
        <h1 className="h1-1"> Youre currently on these Queues</h1>
        <br />
        <div className=" buyerprod">
          {buyerProduct.map((product, index) => (
            <BuyerProduct
              img={product.photo}
              imgalt={product.name}
              key={index}
              name={product.productName}
              id={product._id}
              det={product.description}
              current={product.current}
              reach={product.reach}
            />
          ))}
          {/*<BuyerProduct orderName={props3} orderId={props4} />
          <BuyerProduct orderName={props3} orderId={props4} />
  <BuyerProduct orderName={props3} orderId={props4} />*/}
        </div>
      </div>

      <div className="prediction">
        <AiOutlineStock className="stock" />
        <span className="price-pred">&nbsp;&nbsp;Price Prediction</span>
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
