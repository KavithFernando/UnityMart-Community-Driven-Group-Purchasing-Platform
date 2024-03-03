
import React from 'react';
import { AiOutlineStock } from "react-icons/ai";
import './Buyerdetails.css';
import BuyerProduct from './buyerproduct';

export default function Buyerdetails({ name, email, props3, props4 }) {

    return (
        <div className='container'>
            <div className='usermain'>
                <div className="image-container">
                    <img className="img1" src="../src/images/buyer.png" alt="User Profile Picture" />
                </div>
                <div className="details-container">
                    <h3 className='name'>{name}</h3>
                    <h3 className='email'>{email}</h3>
                </div>
            </div>
            <div className='userprop'>
                <br/>
                <br/>
                <h1 className='h1-1'>You're currently on these Queues</h1>
                <br />
                <div className=' buyerprod'>
                    <BuyerProduct orderName={props3} orderId={props4} />
                    <BuyerProduct orderName={props3} orderId={props4} />
                    <BuyerProduct orderName={props3} orderId={props4} />
                </div>
            </div>

            <div className="prediction">
                <AiOutlineStock className='stock'/><span className='price-pred'>&nbsp;&nbsp;Price Prediction</span>
            </div>

            <div className="chat-bubble">
                <img src="src\images\speec.png" alt="Chat Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Chat
            </div>
        </div>
    );
}
