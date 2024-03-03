import React from 'react';
  

import Buyerdetails from '../Components/Buyerdetails';



export default function Buyer() {

    const name= "Pabasara Ravindraka"
    const email="pabasara12@gmail.com"
    const ordername="Bluetooth Wireless Headset"
    const orderid="122"
    
   //pass the properties
    return (
        <div>
         
        <Buyerdetails
        
        name= {name}
        email={email}
        props3={ordername}
        props4={orderid}
        />
        </div>
    );
       
}
