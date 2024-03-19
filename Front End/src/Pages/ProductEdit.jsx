import React, { useState } from "react";
import "./ProductEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductEdit = (props) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [reach, setReach] = useState("");
  const [storePrice, setStorePrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
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
      });

      toast.info("Submitting order...");

      // Reset form fields after successful submission
      setProductName("");
      setCategory("");
      setReach("");
      setDiscountPrice("");
      setStorePrice("");
      setDescription("");
      setErrors({});
    }
  };

  const getValue = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/product/getOneProductDetailds/${localStorage.getItem(
          "editItems"
        )}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-header">
        <h2>Sell Your Bulk</h2>
      </div>
      <form>
        <div className="editform-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          {errors.productName && (
            <p className="editerror-message">{errors.productName}</p>
          )}
        </div>
        <div className="editform-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && (
            <p className="editerror-message">{errors.category}</p>
          )}
        </div>
        <div className="editform-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={reach}
            onChange={(e) => setReach(e.target.value)}
          />
          {errors.quantity && (
            <p className="editerror-message">{errors.quantity}</p>
          )}
        </div>
        <div className="editform-group">
          <label>Discounted Price</label>
          <input
            type="number"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
          {errors.price && <p className="editerror-message">{errors.price}</p>}
        </div>
        <div className="editform-group">
          <label>Normal Price</label>
          <input
            type="number"
            value={storePrice}
            onChange={(e) => setStorePrice(e.target.value)}
          />
          {errors.storePrice && (
            <p className="editerror-message">{errors.storePrice}</p>
          )}
        </div>
        <div className="editform-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <p className="editerror-message">{errors.description}</p>
          )}
        </div>

        <div className="editbutton">
          <button type="submit" onClick={handleSubmit}>
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
