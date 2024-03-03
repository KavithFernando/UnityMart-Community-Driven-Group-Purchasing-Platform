
import React from 'react';
import './Buyerdetails.css';
import BuyerProduct from './buyerproduct';

export default function Buyerdetails({ props, props2, props3, props4 }) {

    return (
        <div className='container'>
            <div className='usermain'>
                <div className='picborder'>
                    <br/>
                    <div className="image-container">
                        <img className="img1" src="../src/images/buyer.jpg" alt="" />
                    </div>
                </div>
                <br />
                <h3 className='h3-1'>{props}</h3>
                <br />
                <h3 className='h3-1'>  {props2}</h3>
            </div>
            <div className='userprop'>
                <br/>
                <br/>
                <h1 className='h1-1'>You are currently on this queues</h1>
                <br />
                <div className=' buyerprod'>
                <BuyerProduct orderName={props3} orderId={props4} />
                <br />
                <BuyerProduct orderName={props3} orderId={props4} />
                <br />
                <BuyerProduct orderName={props3} orderId={props4} />
                </div>
            </div>
            <div className='userlast'>
                <button className='btnul'>Last Orders</button>
                <button className='btnul1'>Price prediction</button>


            </div>
            <div className="chat-bubble">
                <img src="src\images\speec.png" alt="Chat Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Chat
            </div>
        </div>
    );
}
