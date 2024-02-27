import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Footer from './Components/Common/Footer'
import Navbar from './Components/Common/Navbar';
import Buyer from './Pages/Buyer';
import Seller from './Pages/Seller';
import AboutUsPage from './Pages/AboutUs';
import Product from './Pages/Product';


function App() {
   
  return (
    <div>

      
   
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
        
        <Footer/>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
