import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import Buyer from "./Pages/Buyer";
import Seller from "./Pages/Seller";
import AboutUsPage from "./Pages/AboutUs";
import Product from "./Pages/Product";
import OrderForm from "./Pages/AddOrder";
import ChatWraper from "./ChatWraper";
import ProductEdit from "./Pages/ProductEdit";

function App() {
  {
    useEffect(() => {
      // Check if the user is authenticated on page load
      const id = localStorage.getItem("userId");

      // Define the event listener function
      const beforeUnloadHandler = () => {
        localStorage.setItem("userId", null);
      };

      // Add event listener to set userId to null when the window is closed
      window.addEventListener("beforeunload", beforeUnloadHandler);

      // Cleanup the event listener when component is unmounted
      return () => {
        window.removeEventListener("beforeunload", beforeUnloadHandler);
      };
    }, []);
  } // Empty dependency array ensures this effect runs on mount and when the component re-renders

  const handleNavigate = () => {
    const currentPath = window.location.pathname;
    // Check if the current path is Chat, if yes, don't render Navbar
    if (currentPath === "/Chat") {
      return null;
    } else {
      return <Navbar />;
    }
  };

  const handleFooter = () => {
    const currentPath = window.location.pathname;
    // Check if the current path is Chat, if yes, don't render Navbar
    if (currentPath === "/Chat") {
      return null;
    } else {
      return <Footer />;
    }
  };
  return (
    <div>
      <BrowserRouter>
        {handleNavigate()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/AddOrder" element={<OrderForm />} />
          <Route path="/Chat" element={<ChatWraper />} />
          <Route path="/Edit" element={<ProductEdit />} />
        </Routes>
        {handleFooter()}
      </BrowserRouter>
    </div>
  );
}

export default App;
