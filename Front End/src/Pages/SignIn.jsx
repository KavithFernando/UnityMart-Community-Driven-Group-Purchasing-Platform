import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn({ close, open }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState([]);
  const Navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const handleSubmit = () => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);

    logInUser(errors);
    logInChatUser(errors);
  };

  const validate = () => {
    const error = {};

    if (!userName) {
      error.userName = "User Name is Required";
    } else {
      error.userName = null;
    }

    if (!password) {
      error.password = "Password is Required.";
    } else if (password.length < 8) {
      error.password = "Use 8 or more characters for your password.";
    } else {
      error.password = null;
    }
    return error;
  };

  const logInUser = async (errors1) => {
    try {
      if (errors1.password === null && errors1.userName === null) {
        const { data } = await axios.post("http://localhost:8080/user/login", {
          userName,
          password,
        });

        const id = data.user._id;
        localStorage.setItem("userId", id);

        try {
          const response = await axios.get(`http://localhost:8080/user/${id}`);
          localStorage.setItem("isSeller", response.data.bORs);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }

        toast.success("Login is successful", {
          // position: toast.POSITION.TOP_RIGHT,
        });

        setTimeout(() => {
          close();
          Navigate("/");
        }, 2000);
      }
    } catch {
      toast.error("This email and password do not match", {
        // position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const logInChatUser = async (errors1) => {
    try {
      if (errors1.password === null && errors1.userName === null) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "http://localhost:8000/api/user/login",
          { userName, password },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
    } catch {}
  };

  return (
    <div className="signInbody ">
      <div className="signInContainer">
        <div className="leftPanel">
          <button className="CloseButton1" onClick={() => close()}>
            X
          </button>
          <h1 className="title">New to UnityMart?</h1>

          <p className="paragraph1">
            Please create an account here to join us.
          </p>

          <button
            className="secoundButton"
            onClick={() => {
              close();
              open();
            }}
          >
            Sign Up
          </button>
        </div>

        <div className="signInForm">
          <h1 className="title">Sign In</h1>
          <input
            className="label1"
            type="text"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <input
            className="label1"
            type={visible ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="see" onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
          {errors.password && (
            <div className="passwordError">{errors.password}</div>
          )}
          <button className="button" onClick={handleSubmit}>
            Sign In
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
