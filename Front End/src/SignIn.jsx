import React from 'react'
import './SignIn.css'

export default function SignIn() {
  return (
    <div>
        <div className='leftPanel'>
            <h1>Welcome</h1>

        </div>
        <div className='form'>
            <h1>Create Account</h1>

            <input className='label' type="text" placeholder='Name'/>
            <input className='label' type="email" placeholder='Email'/>
            <input className='label' type="password" placeholder='Password'/>
            <button className='button'>Sign Up</button>
        </div>

      
    </div>
  )
}
