import React from 'react'
import './SignUp.css'
import {  useNavigate } from "react-router-dom";

export default function SignUp() {
    const Navigate=useNavigate();
  return (
    <div className='signUpContainer'>
        
        <div className='signUpForm'>
            
            <h1 className='title'>Create Account</h1>

            <input className='label' type="text" placeholder='Name'/>
            <input className='label' type="email" placeholder='Email'/>
            <input className='label' type="password" placeholder='Password'/>
            <button className='button'>Sign Up</button>
        </div>

        <div className='rightPanel'>
            
            <h1 className='title'>Welcome</h1>
            <p className='paragraph'>Please login with your personal information to join us</p>
            <button className='secoundButton' onClick={()=>Navigate("/signin")}>Sign In</button>
        </div>

      
    </div>
  )
}