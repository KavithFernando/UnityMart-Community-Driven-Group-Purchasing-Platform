import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function sellerproduct() {
  return (
    <div className="product-card">
      <div className="image-div">
        <img src={`src/ProductImages/headphones.jpg`} alt="Product Image" />
      </div>
      <div className="product-card-details">
        <p className="product-card-title">Name</p>
        <p className="product-card-id">Order ID: 123 </p>
        <p className="product-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, doloremque consectetur pariatur, vitae quas dolores nam at id nisi facilis totam tempora. Quae cupiditate ea dolorem dignissimos dolorum repellat impedit.</p>
        <div className="product-card-progress">
          <p className="product-card-reach">Reach 100</p>
          <ProgressBar
            className="product-card-bar"
            completed={80}
            isLabelVisible={true}
            height={13}
            bgColor="#ff5900"
            baseBgColor="#dddddd"
            animateOnRender={true}
          />
        </div>

        <p className="product-card-more">
          <span>20</span> more to go
        </p>
        <div className= "buttoncontainer">
        
        <div className="product-card-edit">Edit order</div>
        
        <div className="product-card-delete">Delete order</div>
        
        </div>
      </div>
    </div>
  )
}
