import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PopularPanel.css";
import Carousel from "react-multi-carousel";
import PopularProduct from "./PopularProduct";
import "react-multi-carousel/lib/styles.css";

export default function PopularPanel() {
  const [topProducts, setTopProducts] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 6,
    },
    middle1: {
      breakpoint: { max: 1300, min: 1200 },
      items: 5,
    },
    middle2: {
      breakpoint: { max: 1200, min: 750 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 3,
    },
    middle3: {
      breakpoint: { max: 750, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    // GET request to fetch top products
    axios
      .get("http://localhost:8080/top-products")
      .then((response) => {
        setTopProducts(response.data.topProducts);
      })
      .catch((error) => {
        console.error("Error fetching top products:", error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="pop-panel">
      <div className="pop-product-title">Most Popular Deals of this Week</div>
      <Carousel
        className="carousel"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
      >
        {topProducts.map((product) => (
          <PopularProduct
            key={product._id}
            productId={product._id}
            title={product.productName}
            description={product.description}
            reach={product.reach}
            current={product.current}
            price={product.discountPrice}
            storePrice={product.storePrice}
            imageSrc={`src/ProductImages/${product.photo}`}
            sellerId={product.sellerID}
            photo={product.photo}
          />
        ))}
      </Carousel>
    </div>
  );
}
