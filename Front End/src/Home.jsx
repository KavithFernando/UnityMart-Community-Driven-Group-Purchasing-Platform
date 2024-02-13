import React from 'react'
import {  useNavigate } from "react-router-dom";

export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
      <button onClick={()=>Navigate("/signin")}>Sign in / Sign up</button>
    </div>
  )
}
