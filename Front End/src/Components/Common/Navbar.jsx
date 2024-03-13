import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

import "./Navbar.css";
import SignUp from "../../Pages/SignUp";
import SignIn from "../../Pages/SignIn";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

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

  const handleProfileClick = () => {
    const currentUserId = localStorage.getItem("userId");
    console.log("Current userId:", currentUserId);
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
          />
          <FaSearch />
        </div>
        <ul>
          <li>
            <Link to="/">
              <IoHome />
            </Link>
          </li>
          <li>
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
        </ul>
      </nav>
      {openModal && <SignUp close={closeModal} open={OpenModal2} />}
      {openModal2 && <SignIn close={closeModal2} open={OpenModal} />}
    </>
  );
}
