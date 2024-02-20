import React from 'react'
import './Buyerdetails.css';


export default function Buyerdetails({props,props2,props3,props4}) {
    
    return (
       
        <div className='container'>
        <div className='usermain'>
          
            <div className='picborder'>
                <div className="image-container">
                     <img className= "img1" src="../src/images/buyer.jpg" alt="" /> 
                </div>   
            </div>
            <br/>
                <h3>{props}</h3>
                <br></br>
                <h3>{props2}</h3>


        </div>
        <div className='userprop'>
            <div className='prop-c1'>
                <h1>You are currently on this queues</h1>
                <div className='prop-c2'>
                    <p>order name :{props3} </p>
                    <p>order id is {props4}</p>
                    
                </div>
            </div>
        </div>
    </div>
);

       


    
}