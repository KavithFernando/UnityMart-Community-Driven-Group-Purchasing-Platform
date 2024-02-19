import React from 'react';
import './Buyer.css'; 
import { useNavigate } from 'react-router';
import buyerdetails from '../Components/buyerdetails';


export default function Buyer(props) {

    const name= "pabasara ravindraka"
   //pass the properties
    return (
        <div className='container'>
            <div className='usermain'>
                <div className='picborder'>
                    <div className="image-container">
                        <img src="../src/images/buyer.jpg" alt="" />
                    
                    <h3>a</h3>
                    
                    </div>
                </div>
               
            </div>
            <div className='userprop'>
            </div>
        </div>
    );
}
