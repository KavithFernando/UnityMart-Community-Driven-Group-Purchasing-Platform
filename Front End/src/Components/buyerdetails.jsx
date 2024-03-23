import React, { useEffect, useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import "./Buyerdetails.css";
import BuyerProduct from "./buyerproduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Buyerdetails() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [buyerProduct, setBuyProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Navigate = useNavigate();

  const loadBuyerData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/buyer/${localStorage.getItem("userId")}`
      );

      setname(data.data.name);
      setEmail(data.data.email);

      //localStorage.setItem("Cart", data.key);
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    } catch (err) {
      console.log(err);
    }
  };
  const userCartProduct = async () => {
    const cartProduct = localStorage.getItem("Cart");
    const array = cartProduct.split(",");
    try {
      const { data } = await axios.post(
        "http://localhost:8080/get/queProducts",
        {
          ids: array,
        }
      );

      setBuyProduct(data.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {});

  useEffect(() => {
    loadBuyerData();
    setTimeout(() => {
      userCartProduct();
    }, 10);
  });

  return (
    <div className="buyerPageBody">
      <div className="buyerContainer">
        <div className="buyerUsermain">
          <div className="buyer-image-container">
            <img
              className="buyer-img2"
              src="../src/images/buyer.png"
              alt="User Profile Picture"
            />
          </div>
          <div className="buyer-details-container">
            <h3 className="name">{name}</h3>
            <h3 className="email">{email}</h3>
          </div>
        </div>
        <div className="buyer-userprop">
          <br />
          <br />
          <h1 className="buyer-h1-1">You're currently on these Purchases</h1>
          <br />
          <div className=" buyerprod">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              buyerProduct.map((product, index) => (
                <BuyerProduct
                  img={product.photo}
                  imgalt={product.name}
                  key={index}
                  name={product.productName}
                  id={product._id}
                  det={product.description}
                  current={product.current}
                  reach={product.reach}
                  seller={product.sellerID}
                  discountPrice={product.discountPrice}
                  storePrice={product.storePrice}
                />
              ))
            )}
          </div>
        </div>

        <div className="prediction">
          <AiOutlineStock className="stock" />
          <span className="price-pred">&nbsp;&nbsp;Price Prediction</span>
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
