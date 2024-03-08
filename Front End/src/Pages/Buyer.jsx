import React, { useState } from "react";
import axios from "axios";
import Buyerdetails from "../Components/buyerdetails";

export default function Buyer() {
  const [predictedSales, setPredictedSales] = useState([]);

  const runMachineLearning = async () => {
    try {
      const response = await axios.get("/run-ml");
      setPredictedSales(response.data.predicted_sales);
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
      <button onClick={runMachineLearning}>sales Prediction</button>
      <Buyerdetails
        name={name}
        email={email}
        props3={ordername}
        props4={orderid}
        predictedSales={predictedSales} // Pass the predicted sales to the component
      />
    </div>
  );
}
