import React from 'react'
import './SignIn.css'
import {  useNavigate } from "react-router-dom";

export default function SignIn() {
    const Navigate=useNavigate();
    
  return (
    <div className='signInContainer'>
        <div className='leftPanel'>
            <h1 className='title'>Hello Friend</h1>
            <p className='paragraph1'>Please enter your Email and password</p>
            <button className='secoundButton' onClick={()=>Navigate("/signup")} >Sign Up</button>
        </div>

        <div className='signInForm'>
            <h1 className='title'>Sign In</h1>
            <input className='label1' type="email" placeholder='Email'/>
            <input className='label1' type="password" placeholder='Password'/>
            <button className='button'>Sign In</button>
        </div>
      
    </div>
  )
}
