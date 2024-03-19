import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Sellerproduct(props) {
  const progress = Math.round((props.current / props.reach) * 100);
  const more = props.reach - props.current;
  return (
    <div className="product-card">
      <div className="image-div">
        <img src={`src/ProductImages/${props.img}`} alt="Product Image" />
      </div>
      <div className="product-card-details">
        <p className="product-card-title">{props.name}</p>
        <p className="product-card-id">{props.id} </p>
        <p className="product-card-description">{props.desc}</p>
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
          <span>{more}</span> more to go
        </p>
        <div className="buttoncontainer">
          <div className="product-card-edit">Edit order</div>

          <div className="product-card-delete">Delete order</div>
        </div>
      </div>
    </div>
  );
}
