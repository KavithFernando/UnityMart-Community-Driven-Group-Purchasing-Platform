import React, { useState } from 'react'
import './SignIn.css'
import {  useNavigate } from "react-router-dom";

export default function SignIn() {
    const Navigate=useNavigate();

    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[errors,setErrors]= useState([]);

    const handleSubmit=()=>{
      event.preventDefault();
      const errors=validate();
      setErrors(errors);

    }

    const validate=()=>{
      const error={};

      if(!email){
        error.email="Email is Required";
      }else if(!/\S+@\S+\.\S+/.test(email)){
        error.email="Email is not valide";
      }else{
        error.email='';
      }


      if(!password){
        error.password="Password is Required";
      }else if(password.length<8){
        error.password="Password is not valide";
      }else{
        error.password='';
      }
      return error;
    }

    
  return (
    <div className='signInContainer'>
        <div className='leftPanel'>
          <form onSubmit={handleSubmit}>
            <h1 className='title'>Hellow Friend</h1>
            <p className='paragraph1'>Please enter your Email and password</p>
          </form>   
            <button className='secoundButton' onClick={()=>Navigate("/signup")} >Sign Up</button>
           
        </div>

        <div className='signInForm'>
            <h1 className='title'>Sign In</h1>
            <input className='label1' type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)  } />
            {errors.email&&<div className='error'>{errors.email}</div>}
            <input className='label1' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
             {errors.password&&<div className='error'>{errors.password}</div>}           
            <button className='button' onClick={handleSubmit}>Sign In</button>
        </div>
      
    </div>
  )
}
