import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import "./PopularPanel.css"

export default function PopularProduct({ path }) {
  return (
      <div className="pop-product">
        <Link to={path} className='link-area'>
          <img src="src\ProductImages\headphones.jpg" alt="Product-Image" />
          <div className="details">
            <div className='title-card'>Sony Wireless Headphones</div>
            <div className="progress">
              <div className="reach">Reach 150</div>
              <ProgressBar className='progress-bar'
                completed={90}
                isLabelVisible={false}
                height={8}
                bgColor="#ff5900"
                baseBgColor="#dddddd"
                padding="2px"
                animateOnRender={true}
              />
              <div className="more">15 more to go</div>
            </div>
            Rs&nbsp;<span className='price-tag'>1500.00</span>&nbsp;&nbsp;<span className='market-price'>Rs 2100.00</span>
            <br />
            <span className='discount'>Hurry up and Save 40%</span>
          </div>
        </Link>
      </div>
  )
}
