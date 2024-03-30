import { useState, useEffect } from "react";
import Sellerdetails from "../Components/sellerdetails";
import "./Seller.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Seller() {
  return (
    <div style={{ height: "1400px" }}>
      <Sellerdetails />
    </div>
  );
}

export default Seller;
