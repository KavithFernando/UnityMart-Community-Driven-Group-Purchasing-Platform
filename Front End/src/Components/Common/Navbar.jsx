import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

import "./Navbar.css";
import SignUp from "../../Pages/SignUp";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {" "}
      <nav>
        {/* <h1>UnityMart</h1> */}
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
            <Link to="/signin">Login</Link>
          </li>
          |
          <li>
            <Link
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      {openModal && <SignUp close={setOpenModal} />}
    </>
  );
}
