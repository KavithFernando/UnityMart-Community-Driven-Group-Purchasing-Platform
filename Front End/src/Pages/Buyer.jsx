import React, { useState } from "react";
import axios from "axios";
import Buyerdetails from "../Components/buyerdetails";

export default function Buyer() {
  const [predictedSalesImage, setPredictedSalesImage] = useState(null);

  const runMachineLearning = async () => {
    try {
      const response = await axios.get("/run-ml", { responseType: 'blob' });
      const imageUrl = URL.createObjectURL(response.data);
      setPredictedSalesImage(imageUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const name = "Pabasara Ravindraka";
  const email = "pabasara12@gmail.com";
  const ordername = "Bluetooth Wireless Headset";
  const orderid = "122";

  return (
    <div>
      <button onClick={runMachineLearning}>Sales Prediction</button>
      {predictedSalesImage && <img src={predictedSalesImage} alt="Predicted Sales" />}
      <Buyerdetails
        name={name}
        email={email}
        props3={ordername}
        props4={orderid}
      />
    </div>
  );
}
