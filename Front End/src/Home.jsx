import React from 'react'
import {  useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import PopularPanel from './Components/PopularProducts/PopularPanel';
import RecomHolder from './Components/Recommended/RecomHolder';
export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>Navigate("/Buyer")}>Buyer</button>
      <button onClick={()=>Navigate("/Seller")}>Seller Page</button>
      <button onClick={()=>Navigate("/AboutUsPage")}>About Us</button>
      <button onClick={()=>Navigate("/Product")}>Product Page</button>
      <PopularPanel/>
      <RecomHolder/>
    </div>
    
  )
}
