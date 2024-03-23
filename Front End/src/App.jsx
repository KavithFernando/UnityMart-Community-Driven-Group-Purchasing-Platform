import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import SearchResultsHolder from "./Pages/SearchResultsHolder";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

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

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const isNotChat = currentPath !== "/Chat";

  return (
    <div>
      {isNotChat && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/AddOrder" element={<OrderForm />} />
        <Route path="/Chat" element={<ChatWraper />} />
        <Route path="/Edit" element={<ProductEdit />} />
        <Route path="/search" element={<SearchResultsHolder />} />
      </Routes>
      {isNotChat && <Footer />}
    </div>
  );
}

export default App;
