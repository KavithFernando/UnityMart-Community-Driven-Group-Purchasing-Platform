import React from 'react'
import {  useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";



export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>Navigate("/Buyer")}>Buyer</button>
      
    </div>
    
  )
}
