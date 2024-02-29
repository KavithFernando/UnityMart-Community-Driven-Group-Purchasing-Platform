import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import "./Navbar.css";
import SignUp from "../../Pages/SignUp";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Link onClick={handleShow}>Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <SignUp />
      </Modal>
    </>
  );
}
