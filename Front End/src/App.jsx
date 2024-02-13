import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'



function App() {
   

  return (
    <div>
   
   <BrowserRouter>
      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </BrowserRouter>
      
      

    
      
    </div>
  )
}

export default App
