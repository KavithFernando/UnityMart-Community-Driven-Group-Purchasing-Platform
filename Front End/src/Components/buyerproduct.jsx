import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function BuyerProduct(props) {
  const progress = Math.round((props.current / props.reach) * 100);

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
          <p className="product-card-reach">Reach </p>
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
          <span></span> more to go
        </p>
        <div className="product-card-fullview">View Details</div>
      </div>
    </div>
  );
}
