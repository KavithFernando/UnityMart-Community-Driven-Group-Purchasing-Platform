import React from 'react'
import {  useNavigate } from "react-router-dom";
import PopularPanel from './Components/PopularProducts/PopularPanel';


export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>Navigate("/Buyer")}>Buyer</button>
      <button onClick={()=>Navigate("/Seller")}>Seller Page</button>
      <PopularPanel/>
    </div>
    
  )
}
