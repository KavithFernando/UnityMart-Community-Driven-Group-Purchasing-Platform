import { useState, useEffect } from 'react';
import Sellerdetails from '../Components/sellerdetails';
import './Seller.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Seller() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handlename = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`http://localhost:8080/user/${userId}`);
        const userName = response.data.userName; //  username is stored in the 'userName' property of the response data
        setUserInfo({ name: userName });//name is retrieved
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching seller name:", error);
      }
    };

    handlename();
  }, []);

  // Dummy order data
  const orders = [
    { id: 1, details: 'Iphone 14 pro max bulk sale.', progress: 25 },
    { id: 2, details: 'Order 2 details', progress: 50 },
    { id: 3, details: 'Order 3 details', progress: 75 },
    { id: 4, details: 'Order 4 details', progress: 100 },
  ];

  const averageIncome = 1000;

  return (
    <Sellerdetails/>
  );
}

export default Seller;
