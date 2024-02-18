import React from 'react'
import { Link } from 'react-router-dom'
import "./PopularPanel.css"

export default function PopularProduct({ path }) {
  return (
      <div className="pop-product">
        <Link to={path} className='link-area'>
          <img src="src\ProductImages\headphones.jpg" alt="Product-Image" />
          <div className="details">
            <h4>Sony Wireless Headphones</h4>
            <div className="progress-bar">Placeholder<br/>Placeholder<br/>Placeholder</div>
            <br />
            Rs&nbsp;<span className='price-tag'>1500.00</span>
            <br />
            <span className='discount'>Join and Save upto 40%</span>
          </div>
        </Link>
      </div>
  )
}
