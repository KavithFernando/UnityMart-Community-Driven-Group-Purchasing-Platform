import React from 'react';
  

import Buyerdetails from '../Components/buyerdetails';



export default function Buyer() {

    const name= "pabasara ravindraka"
    const email="pabasara12@gmail.com"
    const ordername="Bluetooth Wireless Headset"
    const orderid="122"
    
   //pass the properties
    return (
        <div>
         
        <Buyerdetails
        
        props= {name}
        props2={email}
        props3={ordername}
        props4={orderid}
        />
        </div>
    );
       
}
