import React, { useEffect, useState } from "react";
import ImageDisplay from "../Components/ProductPage/ImageDisplay";
import DescriptionDisplay from "../Components/ProductPage/DescriptionDisplay";
import FunctionsDisplay from "../Components/ProductPage/FunctionsDisplay";

import "../Components/ProductPage/Product.css";

export default function Product({
  name = "Seller Name",
  username = "Seller Username",
  title = "Product Title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam omnis adipisci, magnam consequatur nostrum cumque. Repudiandae quam soluta vel sunt nam quia minima, ipsam consequatur. In similique repudiandae quidem tempore ipsum molestiae. Debitis, beatae!",
  price = 1500.0,
  storePrice = 2100.0,
  discount = 0,
  reach = 150,
  completed = 60,
  to_go = 60,
  photo,
}) {
  title = localStorage.getItem("title");
  description = localStorage.getItem("description");
  price = parseFloat(localStorage.getItem("price"));
  storePrice = parseFloat(localStorage.getItem("storePrice"));
  discount = parseInt(localStorage.getItem("discount"));
  reach = parseInt(localStorage.getItem("reach"));
  completed = parseInt(localStorage.getItem("completed"));
  to_go = parseInt(localStorage.getItem("to_go"));
  name = localStorage.getItem("sellerName");
  username = localStorage.getItem("sellerUsername");
  photo = localStorage.getItem("photo");

  return (
    <div className="product-page">
      <div className="three-panel-holder">
        <div className="part1">
          <ImageDisplay photo={photo} />
        </div>

        <div className="part2">
          <DescriptionDisplay
            name={name}
            username={username}
            title={title}
            description={description}
            price={price}
            storePrice={storePrice}
            discount={discount}
          />
        </div>

        <div className="part3">
          {" "}
          <FunctionsDisplay
            price={price}
            reach={reach}
            completed={completed}
            to_go={to_go}
          />
        </div>
      </div>
    </div>
  );
}
