// App.js

import { useState } from 'react';
import './Seller.css';
import {  useNavigate } from "react-router-dom";



function Seller() {
  const [count, setCount] = useState(0);

  // Dummy user data
  const user = {
    name: 'John Doe',
    rating: 4.5, 
  };
  const orders = [
    { id: 1, details: 'Iphone 14 pro max bulk sale.', progress: 25 },
    { id: 2, details: 'Order 2 details', progress: 50 },
    { id: 3, details: 'Order 3 details', progress: 75 },
    { id: 4, details: 'Order 4 details', progress: 100 },
  ];

  const averageIncome = 1000;
  const navigate = useNavigate();

 

  return (
    <div className="app-wrapper">
      <header>
        <section>
          <div className="user-container">
         
            <div>
              <h2>Name: {user.name}</h2>
              <p>Rating: {user.rating}</p>
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
          Chat
        </div>
      </main>

     
    </div>
  );
}

export default Seller;
