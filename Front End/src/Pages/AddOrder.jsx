import React, { useState } from "react";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderForm = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [reach, setReach] = useState("");
  const [storePrice, setStorePrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!productName.trim()) {
      newErrors.productName = "Product name is required";
      valid = false;
    }
    if (!category.trim()) {
      newErrors.category = "Category is required";
      valid = false;
    }
    if (!reach.trim() || isNaN(reach) || +reach <= 0) {
      newErrors.quantity = "Quantity must be a positive number";
      valid = false;
    }
    if (!discountPrice.trim() || isNaN(discountPrice) || +discountPrice <= 0) {
      newErrors.price = "Price must be a positive number";
      valid = false;
    }
    if (!storePrice.trim() || isNaN(storePrice) || +storePrice <= 0) {
      newErrors.storePrice = "Store Price must be a positive number";
      valid = false;
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }
    if (!photo) {
      newErrors.photo = "Photo is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Order submitted:", {
        productName,
        category,
        reach,
        discountPrice,
        storePrice,
        description,
        photo,
      });

      toast.info("Submitting order...");

      // Reset form fields after successful submission
      setProductName("");
      setCategory("");
      setReach("");
      setDiscountPrice("");
      setStorePrice("");
      setDescription("");
      setPhoto(null);
      setErrors({});
    }
    createProduct();
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const createProduct = async () => {
    const sellerID = localStorage.getItem("userId");
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("category", category);
    formData.append("reach", reach);
    formData.append("discountPrice", discountPrice);
    formData.append("storePrice", storePrice);
    formData.append("description", description);
    formData.append("photo", photo);
    formData.append("sellerID", sellerID);

    try {
      await axios.post("http://localhost:8080/product/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      ("");
    }
  };

  return (
    <div className="order-container">
      <div className="order-header">
        <h2>Sell Your Bulk</h2>
      </div>
      <form>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          {errors.productName && (
            <p className="error-message">{errors.productName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && (
            <p className="error-message">{errors.category}</p>
          )}
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={reach}
            onChange={(e) => setReach(e.target.value)}
          />
          {errors.quantity && (
            <p className="error-message">{errors.quantity}</p>
          )}
        </div>
        <div className="form-group">
          <label>Discounted Price</label>
          <input
            type="number"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
          {errors.price && <p className="error-message">{errors.price}</p>}
        </div>
        <div className="form-group">
          <label>Normal Price</label>
          <input
            type="number"
            value={storePrice}
            onChange={(e) => setStorePrice(e.target.value)}
          />
          {errors.storePrice && (
            <p className="error-message">{errors.storePrice}</p>
          )}
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {errors.photo && <p className="error-message">{errors.photo}</p>}
        </div>
        <div className="ordersubmitbutton">
          <button type="submit" onClick={handleSubmit} className="orderSubmit">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
