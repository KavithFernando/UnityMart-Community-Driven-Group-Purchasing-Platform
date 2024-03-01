
import React, { useState } from 'react';
import './Add.css';

const OrderForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!productName.trim()) {
      newErrors.productName = 'Product name is required';
      valid = false;
    }
  }  

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Order submitted:', {
      productName,
      category,
      brand,
      quantity,
      price,
      description,
      photo,
    });

    // Reset form fields after submission
    setProductName('');
    setCategory('');
    setBrand('');
    setQuantity('');
    setPrice('');
    setDescription('');
    setPhoto(null);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div className="order-container">
      <div className="order-header">
        <h2>Sell Your Bulk</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
           
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Brand:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price per piece:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div className='button'>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
