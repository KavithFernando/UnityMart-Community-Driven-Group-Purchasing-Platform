import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';
import './ContactUs.css'; 

function App(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    console.log(name,email,message);
    return(
        <div className='form'>
            <form>
                <div className ='input'>
                    <lable for = 'name'>Name</lable>
                    <input type='text' id='name' name='name' placeholder='Your Nanme' value={name}  onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='input'>
                    <label for ='email'>E-Mail</label>
                    <input type='text' id='email' name='email' placeholder='Your E-Mail' value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <label for='message'>Message</label>
                    <textarea name='message' id='message' placeholder='Your Message' value={message}  onChange={(e)=> setMessage(e.target.value)}></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}


export default ContactUs;