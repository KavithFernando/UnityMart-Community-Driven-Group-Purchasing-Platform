import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import Buyer from "./Pages/Buyer";
import Seller from "./Pages/Seller";
import AboutUsPage from "./Pages/AboutUs";
import Product from "./Pages/Product";
import OrderForm from "./Pages/AddOrder";
import ChatWraper from "./ChatWraper";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on page load
    const id = localStorage.getItem('userId');
  
    if (id) {
      // User is authenticated
      setIsAuthenticated(true);
    } else {
      // User is not authenticated
      setIsAuthenticated(false);
    }
  }, []); // Empty dependency array ensures this effect runs on mount and when the component re-renders

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/AddOrder" element={<OrderForm />} />
          <Route path="/Chat" element={<ChatWraper />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
