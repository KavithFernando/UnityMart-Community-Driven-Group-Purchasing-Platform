import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <h1>UnityMart</h1>
      <ul>
        <li><Link to="/signin">Login</Link></li>
        |
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}