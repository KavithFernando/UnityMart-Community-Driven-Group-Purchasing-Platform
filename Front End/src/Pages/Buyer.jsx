import React from 'react';
import './Buyer.css'; 
import { useNavigate } from 'react-router';


export default function Buyer() {

    const name= "pabasara ravindraka"
    return (
        <div className='container'>
            <div className='usermain'>
                <div className='picborder'>
                    <div className="image-container">
                        <img src="../src/images/buyer.jpg" alt="" />
                    
                    <h3>{name}</h3>
                    </div>
                </div>
            </div>
            <div className='userprop'>
            </div>
        </div>
    );
}
