import React from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";

export default function DescriptionDisplay(
        {
            name,
            username,
            title,
            description,
            price,
            storePrice,
            discount
        }
    ) 
{

  return (
    <div className='description-display'>
        <div className="seller-info">  
            <div className="pfp">
                <img src="src\images\seller.png" alt="Seller's Profile Photo" />
            </div>
            <div className="seller-names">
                <Link to="/Seller">
                    <h4>{name}</h4>
                    <h5>{username}</h5>
                </Link>
            </div>
        </div>
        <div className="description-title">
            {title}
        </div>
        <div className="description-detailed">
            {description}     
        </div>
        <div className="pricing-details">
            <p className='rs'>Rs</p>
            <p className="price">{price.toFixed(2)}</p>
            <p className="store-price">Rs {storePrice.toFixed(2)}</p>
            <p className="discount">-{discount}%</p>
        </div>
        <hr />
        <div className="process">
            <h4>How it works</h4>
            <ul>
                <li>
                    <HiOutlineShoppingCart/>
                    &nbsp;&nbsp;&nbsp;
                    Select Quantity
                    &nbsp;&nbsp;&nbsp;
                    <span>Specify the number of items you want to purchase</span>
                </li>
                <li>
                    <AiOutlineDollar/>
                    &nbsp;&nbsp;&nbsp;
                    Join Purchase
                    &nbsp;&nbsp;&nbsp;
                    <span>Leaverage the power of Unity with Group Purchasing</span>
                </li>
                <li>
                    <GoShareAndroid/>
                    &nbsp;&nbsp;&nbsp;
                    Share
                    &nbsp;&nbsp;&nbsp;
                    <span>Get others to join the order for Faster Completion</span>
                </li>
                <li>
                    <MdOutlineAccessTime/>
                    &nbsp;&nbsp;&nbsp;
                    Wait
                    &nbsp;&nbsp;&nbsp;
                    <span>Wait for the order to complete and Enjoy Exciting Discounts</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
