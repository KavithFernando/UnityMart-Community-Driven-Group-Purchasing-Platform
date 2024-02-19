import React from 'react'
import { Link } from 'react-router-dom'
import "./PopularPanel.css"

export default function PopularProduct({ path }) {
  return (
      <div className="pop-product">
        <Link to={path} className='link-area'>
          <img src="src\ProductImages\headphones.jpg" alt="Product-Image" />
          <div className="details">
            <div className='title-card'>Sony Wireless Headphones bngjbngjbnnjnjjnvjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn jnfj</div>
            <div className="progress-bar"><br /><br/><br/></div>
            <br />
            Rs&nbsp;<span className='price-tag'>1500.00</span>&nbsp;&nbsp;<span className='market-price'>Rs 2100.00</span>
            <br />
            <span className='discount'>Join and Save upto 40%</span>
          </div>
        </Link>
      </div>
  )
}
