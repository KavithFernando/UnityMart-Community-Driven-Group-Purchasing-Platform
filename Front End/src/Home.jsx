import React from 'react'
import {  useNavigate } from "react-router-dom";


export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>Navigate("/Buyer")}>Buyer</button>
      <button onClick={()=>Navigate("/Seller")}>Seller Page</button>
      
    </div>
    
  )
}
