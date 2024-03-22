import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductEdit = () => {
  const [productName, setProductName] = useState("");

  const [category, setCategory] = useState("");
  const [reach, setReach] = useState("");
  const [storePrice, setStorePrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    getValue();
    console.log("dsfdds");
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!productName) {
      newErrors.productName = "Product name is required";
    } else {
      newErrors.productName = null;
    }
    if (!category) {
      newErrors.category = "Category is required";
    } else {
      newErrors.category = null;
    }
    if (!reach || +reach <= 0) {
      newErrors.quantity = "Quantity must be a positive number";
    } else {
      newErrors.quantity = null;
    }
    if (!discountPrice || +discountPrice <= 0) {
      newErrors.price = "Price must be a positive number";
    } else {
      newErrors.price = null;
    }
    if (!storePrice || +storePrice <= 0) {
      newErrors.storePrice = "Store Price must be a positive number";
    } else {
      newErrors.storePrice = null;
    }
    if (!description) {
      newErrors.description = "Description is required";
    } else {
      newErrors.description = null;
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    setErrors(errors);

    editProduct();
    //}
    //if (
    //errors.productName === null &&
    //errors.category === null &&
    //errors.reach === null &&
    //errors.discountPrice === null &&
    // errors.storePrice === null &&
    //errors.description === null
    //) {
    setTimeout(() => {
      Navigate("/Seller");
    }, 200);
  };

  const getValue = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/product/getOneProductDetailds/${localStorage.getItem(
          "editItems"
        )}`
      );

      setProductName(data.productName);
      setDescription(data.description);
      setCategory(data.category);
      setReach(data.reach);
      setDiscountPrice(data.discountPrice);
      setStorePrice(data.storePrice);
    } catch (err) {
      console.log(err);
    }
  };

  const editProduct = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/product/update/${localStorage.getItem(
          "editItems"
        )}`,
        {
          productName: productName,
          category: category,
          reach: reach,
          discountPrice: discountPrice,
          storePrice: storePrice,
          description: description,
        }
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
      <div>
        <div className="editform-group">
          <label>Product Name:</label>
          <input
            type="text"
            defaultValue={productName}
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
            defaultValue={category}
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
            defaultValue={reach}
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
            defaultValue={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
          {errors.price && <p className="editerror-message">{errors.price}</p>}
        </div>
        <div className="editform-group">
          <label>Normal Price</label>
          <input
            type="number"
            defaultValue={storePrice}
            onChange={(e) => setStorePrice(e.target.value)}
          />
          {errors.storePrice && (
            <p className="editerror-message">{errors.storePrice}</p>
          )}
        </div>
        <div className="editform-group">
          <label>Description:</label>
          <textarea
            defaultValue={description}
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
      </div>
    </div>
  );
};

export default ProductEdit;
