import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";

import "./RecomHolder.css"


export default function RecomProduct({ path }) {
  return (
    <div className='recomProduct-card'>
			<Link to={path} className='link-area'>
				<img src="src\ProductImages\shoes.jpeg" alt="Product-Image" />
				<div className="details">
					<div className='title-card'>Walking Sneakers for Women 2024 Spring New Ladies Thick-soled Sneakers Casual Height-increasing Women's Shoes Free Shipping</div>
					<div className="progress">
              		<div className="reach">Reach 150</div>
						<ProgressBar className='progress-bar'
							completed={60}
							isLabelVisible={false}
							height={8}
							bgColor="#ff5900"
							baseBgColor="#dddddd"
							padding="2px"
							animateOnRender={true}
						/>
						<div className="more">60 more to go</div>
					</div>
					<b>Rs</b><span className='price-tag'>1500.00</span>&nbsp;&nbsp;<span className='market-price'>Rs 2100.00</span>
				</div>
			</Link>
    </div>
  )
}
