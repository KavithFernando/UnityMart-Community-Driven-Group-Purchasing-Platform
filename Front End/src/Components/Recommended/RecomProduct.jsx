import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";

import "./RecomHolder.css"


export default function RecomProduct({productName,reach, discountPrice, storePrice,photo,sellerID}) {
  return (
    <div className='recomProduct-card'>
			<Link to="/Product" className='link-area'>
				<img src={`src/ProductImages/${photo}`} alt="Product-Image" />
				<div className="details">
					<div className='title-card'>{productName}</div>
					<div className="progress">
              		<div className="reach">Reach {reach}</div>
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
					<b>Rs</b><span className='price-tag'>{discountPrice}</span>&nbsp;&nbsp;<span className='market-price'>Rs {storePrice}</span>
				</div>
				<div className="buttons">
					<div className='button-join'>Join Purchase</div>
				</div>
			</Link>
    </div>
  )
}
