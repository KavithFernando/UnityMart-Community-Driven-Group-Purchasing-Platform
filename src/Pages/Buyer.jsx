import React, { useState } from "react";
import axios from "axios";
import Buyerdetails from "../Components/buyerdetails";

export default function Buyer() {
  const [predictedSalesImage, setPredictedSalesImage] = useState(null);

  const runMachineLearning = async () => {
    try {
      const response = await axios.get("http://localhost:5000/run-ml", {
        responseType: "blob",
      });
      const imageUrl = URL.createObjectURL(response.data);
      setPredictedSalesImage(imageUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ height: "1100px" }}>
      {predictedSalesImage && (
        <img src={predictedSalesImage} alt="Predicted Sales" />
      )}
      <Buyerdetails />
    </div>
  );
}
