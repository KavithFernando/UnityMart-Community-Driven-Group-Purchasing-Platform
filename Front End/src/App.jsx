import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import Buyer from "./Pages/Buyer";
import Seller from "./Pages/Seller";
import AboutUsPage from "./Pages/AboutUs";
import Product from "./Pages/Product";
import OrderForm from "./Pages/AddOrder";
import MyOne from "./MyOne";
import ChatWraper from "./ChatWraper";

function App() {
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
