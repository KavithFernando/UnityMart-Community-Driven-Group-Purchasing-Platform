import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <h1>UnityMart</h1>
      <ul>
        <li></li>
        <li><Link to="/"><IoHome/></Link></li>
        <li><Link to="/signin">Login</Link></li>
        |
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}