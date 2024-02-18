// App.js

import { useState } from 'react';
import './seller.css';

import userLogo from './assets/man_4140048.png';


function Seller() {
  const [count, setCount] = useState(0);

  // Dummy user data
  const user = {
    name: 'John Doe',
    rating: 4.5, 
  };

 

  return (
    <div className="app-wrapper">
      <header>
        <section>
          <div className="user-container">
            <img src={userLogo} alt="User Logo" className="user-logo" />
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
            <h2>Add an Order</h2> 
          </div>
        </section>
      </header>

     
    </div>
  );
}

export default Seller;
