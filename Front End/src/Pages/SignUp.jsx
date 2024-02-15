import React ,{ useState }from 'react'
import './SignUp.css'
import {  useNavigate } from "react-router-dom";
import{EyeInvisibleOutlined,EyeOutlined} from "@ant-design/icons";

export default function SignUp() {
    const Navigate=useNavigate();

    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[errors,setErrors]= useState([]);
    const[visible,setVisible]=useState(false);
    const[reEntedPasswordVisible,setReEntedPasswordVisible]=useState(false);
    const[reEntedPassword,setReEntedPassword]= useState('');

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


      if(!reEntedPassword){
        error.reEnted="Password is Required"
      }
      else if(!(reEntedPassword===password)){
        error.reEnted="The password does not match"
      }
      
      else{
        error.reEnted=""
      }



      return error;
    }

  return (
    <div className='signUpContainer'>
        
        <div className='signUpForm'>
            
            <h1 className='title'>Create Account</h1>
              <div className='formeAline'>
              <input className='label' type="text" placeholder='Name'/>
              <input className='label' type="email" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
              {errors.email&&<div className='error'>{errors.email}</div>}
              <input className='label'  type={visible?"text":"password"}placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
              <div className='see' onClick={()=>setVisible(!visible)}>
                {visible?<EyeOutlined/>:<EyeInvisibleOutlined/>}
              </div>
              {errors.password&&<div className='passwordError'>{errors.password}</div>} 
              
              <div className='reEntedPassworPosition'>
              <input className='label'  type={reEntedPasswordVisible?"text":"password"}placeholder='Re ented Password' onChange={(e)=>setReEntedPassword(e.target.value)}/>
              <div className='seeReEnted' onClick={()=>setReEntedPasswordVisible(!reEntedPasswordVisible)}>
                {reEntedPasswordVisible?<EyeOutlined/>:<EyeInvisibleOutlined/>}
              </div>
              {errors.reEnted&&<div className='reEntedPasswordError'>{errors.reEnted}</div>} 
              </div>
              </div>
            <div className='radioButtonPart'>
              <label className='radioButton'>
              <input type="radio" value="seller"  />
              Seller
              </label>

              <label className='radioButton'>
              <input type="radio" value="buyer"  />
              Buyer
              </label>
            </div>
            <button className='button' onClick={handleSubmit}>Sign Up</button>
            </div>
        

        <div className='rightPanel'>
            
            <h1 className='title'>Welcome</h1>
            <p className='paragraph'>Please login with your personal information to join us</p>
            <button className='secoundButton' onClick={()=>Navigate("/signin")}>Sign In</button>
        </div>

      
    </div>
  )
}