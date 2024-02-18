// App.js

import { useState } from 'react';
import './Seller.css';



function Seller() {
  const [count, setCount] = useState(0);

  // Dummy user data
  const user = {
    name: 'John Doe',
    rating: 4.5, 
  };

  const averageIncome = 1000;

 

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
            <h2>Add an Order</h2> 
          </div>
        </section>
      </header>

     
    </div>
  );
}

export default Seller;
