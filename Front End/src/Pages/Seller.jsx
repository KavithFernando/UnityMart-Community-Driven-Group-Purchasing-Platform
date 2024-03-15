import { useState, useEffect } from 'react';
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
        const userName = response.data.userName; // Assuming the username is stored in the 'userName' property of the response data
        setUserInfo({ name: userName });
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
    <div className="app-wrapper">
      <header>
        <section>
          <div className="user-container">
            <img src="src\images\man_4140048.png" alt="User Logo" className="user-logo" />
            <div>
              <h2>Name: {userInfo.name}</h2>
              {/* Assuming user rating is not dynamic */}
              <p>Rating: {userInfo.rating || 4.5}</p>
            </div>
          </div>
          <div className="income-card">
            <h2>Average Income</h2>
            <p>${averageIncome}</p>
          </div>
          <div className="add-card">
            <button onClick={() => navigate("/AddOrder")}>Add Order</button>
          </div>
          <div className="income-card">
            <h2>Sales Prediction</h2>
          </div>
        </section>
      </header>
      <main>
        <div className="interface">
          <div className="orders-wrapper">
            <h1>Your Ongoing Sales</h1>
            {orders.map(order => (
              <div key={order.id} className={`order-card order${order.id}`}>
                <div>
                  <h3>Order Details:</h3>
                  <p className="order-details">{order.details}</p>
                </div>
                <div className="order-progress">
                  <p>Order progress.</p>
                  <span className="progress-bar" style={{ width: `${order.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-bubble">
          <img src="src\images\speec.png" alt="Chat Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          Chat
        </div>
      </main>
    </div>
  );
}

export default Seller;
