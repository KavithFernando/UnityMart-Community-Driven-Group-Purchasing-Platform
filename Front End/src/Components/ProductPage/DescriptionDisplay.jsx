import React from 'react'
import { Link } from 'react-router-dom'

export default function DescriptionDisplay() {
  return (
    <div className='description-display'>
        <div className="seller-info">
        
            <div className="pfp">
                <img src="src\images\seller.png" alt="Seller's Profile Photo" />
            </div>
            <div className="seller-names">
                <Link to="/Seller">
                    <h4>Seller Name</h4>
                    <h5>Seller Username</h5>
                </Link>
            </div>
        </div>
        <div className="description-title">
            Women Casual Shoes Fashion Breathable Walking Mesh Flat Shoes Sneakers Women 2021 Gym Vulcanized Shoes White Female Footwear
        </div>
        <div className="description-detailed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam omnis adipisci, magnam consequatur nostrum cumque. Repudiandae quam soluta vel sunt nam quia minima, ipsam consequatur. In similique repudiandae quidem tempore ipsum molestiae. Debitis, beatae!        
        </div>
        <div className="pricing-details">
            <p className='rs'>Rs</p>
            <p className="price">1500.00</p>
            <p className="store-price">Rs 2100.00</p>
            <p className="discount">-40%</p>
        </div>
    </div>
  )
}
