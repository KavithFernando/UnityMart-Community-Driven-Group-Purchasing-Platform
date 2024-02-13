import React from 'react'
import './SignIn.css'
import {Link,useNavigate} from "react-router-dom";

export default function SignIn() {
    
  return (
    <div className='signInContainer'>
        <div className='leftPanel'>
            <h1 className='title'>Hellow Friend</h1>
            <p className='paragraph'>Please enter your Email and password</p>
            <button className='button' >Sign Up</button>
        </div>

        <div className='signInForm'>
            <h1 className='title'>Sign In</h1>
            <input className='label' type="text" placeholder='Name'/>
            <input className='label' type="email" placeholder='Email'/>
            <input className='label' type="password" placeholder='Password'/>
            <button className='button'>Sign In</button>
        </div>

      
    </div>
  )
}
