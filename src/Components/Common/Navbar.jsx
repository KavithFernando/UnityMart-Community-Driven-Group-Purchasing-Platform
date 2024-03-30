import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "./Navbar.css";
import SignUp from "../../Pages/SignUp";
import SignIn from "../../Pages/SignIn";
import axios from "axios";

export default function Navbar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const OpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const OpenModal2 = () => {
    setOpenModal2(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal2 = () => {
    setOpenModal2(false);
    document.body.style.overflow = "auto";
  };

  const loadBuyerData = async () => {
    try {
      const { data } = await axios.get(
        `https://test.atomaxia.com/expressjstest/buyer/${localStorage.getItem("userId")}`
      );
      setTimeout(() => {
        localStorage.setItem("Cart", data.key);
      }, 60);
    } catch (err) {
      console.log(err);
    }
  };

  const searchProduct = () => {
    fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("results", data);
        setResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      {" "}
      <nav>
        <img src="Images\UnityMartLongLogo.png" alt="Logo" />
        <div className="searchDiv">
          <input
            className="search"
            type="text"
            placeholder="Search UnityMart"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <Link to="/search">
            <FaSearch 
              onClick={searchProduct}
            />
          </Link>
        </div>
        <ul>
          <li style={{ marginTop: "5px" }}>
            <Link to="/">
              <IoHome />
            </Link>
          </li>
          <li style={{ marginTop: "5px" }}>
            <Link to="/AboutUsPage">
              <IoMdInformationCircleOutline />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                closeModal();
                OpenModal2();
              }}
            >
              Login
            </Link>
          </li>
          |
          <li>
            <Link
              onClick={() => {
                closeModal2();
                OpenModal();
              }}
            >
              Sign Up
            </Link>
          </li>
          {localStorage.getItem("userId") !== "null" && (
            <li>
              <Link
                to={
                  localStorage.getItem("isSeller") === "true"
                    ? "/Seller"
                    : "/buyer"
                }
                onClick={loadBuyerData}
              >
                <CgProfile/>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {openModal && <SignUp close={closeModal} open={OpenModal2} />}
      {openModal2 && <SignIn close={closeModal2} open={OpenModal} />}
    </>
  );
}
