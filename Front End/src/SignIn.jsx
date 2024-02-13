import React from 'react'
import './SignIn.css'

export default function SignIn() {
  return (
    <div className='container'>
        <div className='leftPanel'>
            <h1 className='title'>Welcome</h1>
            <p className='paragraph'>Please login with your personal information to join us</p>
            <button className='button'>Sign In</button>
        </div>

        <div className='form'>
            <h1 className='title'>Create Account</h1>

            <input className='label' type="text" placeholder='Name'/>
            <input className='label' type="email" placeholder='Email'/>
            <input className='label' type="password" placeholder='Password'/>
            <button className='button'>Sign Up</button>
        </div>

      
    </div>
  )
}
