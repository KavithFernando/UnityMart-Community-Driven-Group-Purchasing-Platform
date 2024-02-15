import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <h1>UnityMart</h1>
      <ul>
        <li><Link to="/"></Link></li>
        <li></li>
      </ul>
    </nav>
  )
}