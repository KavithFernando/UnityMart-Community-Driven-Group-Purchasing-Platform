import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BuyerProduct(props) {
  const [quntity, setQuntity] = useState("");
  const [sellerInfo, setSellerInfo] = useState({});
  const progress = Math.round((props.current / props.reach) * 100);

  const to_go = props.reach - props.current;
  const completed = (props.current / props.reach) * 100;
  const discount = Math.round(((props.storePrice - props.discountPrice) / props.storePrice) * 100);
  

  const getProductQuntaty = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/user/purchasedProduct/${localStorage.getItem(
          "userId"
        )}/${props.id}`
      );
      console.log(data);
      setQuntity(data);
      console.log(quntity);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to fetch seller details
  const fetchSellerInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/${props.seller}`);
      setSellerInfo(response.data);
    } catch (error) {
      console.error('Error fetching seller info00:', error);
    }
  };

  useEffect(() => {
    getProductQuntaty();
    fetchSellerInfo();
  }, []);

  const handleClick = () => {
    // Save the product details to local storage
    localStorage.setItem('productId', props.id);
    localStorage.setItem('title', props.name);
    localStorage.setItem('description', props.det)
    localStorage.setItem('reach', props.reach);
    localStorage.setItem('price', props.discountPrice);
    localStorage.setItem('storePrice', props.storePrice);
    localStorage.setItem('to_go', to_go);
    localStorage.setItem('completed', completed);
    localStorage.setItem('discount', discount);
    localStorage.setItem('sellerName', sellerInfo.name || '');
    localStorage.setItem('sellerUsername', sellerInfo.userName || '');
    localStorage.setItem('photo',props.img );
  };

  return (
    <div className="product-card">
      <div className="image-div">
        <img src={`src/ProductImages/${props.img}`} alt="Product Image" />
      </div>
      <div className="product-card-details">
        <p className="product-card-title">{props.name}</p>
        <p className="product-card-id">Order ID:{props.id} </p>
        <p className="product-card-description">{props.det}</p>
        <div className="product-card-progress">
          <p className="product-card-reach">Reach {props.reach}</p>
          <ProgressBar
            className="product-card-bar"
            completed={progress}
            isLabelVisible={true}
            height={13}
            bgColor="#ff5900"
            baseBgColor="#dddddd"
            animateOnRender={true}
          />

        </div>

        <p className="product-card-more">
          <span>{props.reach - props.current}</span> more to go
        </p>
        <div className="quantity-flexer">
          <div className="product-card-fullview" onClick={handleClick}><Link to="/Product">View Details</Link></div> 
          <p className="quantity">Quantity: {quntity}</p>
        </div>
      </div>
    </div>
  );
}
