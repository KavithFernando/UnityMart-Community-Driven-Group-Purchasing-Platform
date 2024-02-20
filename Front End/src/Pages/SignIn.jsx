import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export default function SignIn() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [visible, setVisible] = useState(true);

  const handleSubmit = () => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "The Email is Invalid";
    } else {
      error.email = "";
    }

    if (!password) {
      error.password = "Password is Required.";
    } else if (password.length < 8) {
      error.password = "Use 8 or more characters for your password.";
    } else {
      error.password = "";
    }
    return error;
  };

  return (
    <div className="signInContainer">
      <div className="leftPanel">
        <h1 className="title">New to UnityMart?</h1>

        <p className="paragraph1">Please create an account here to join us.</p>

        <button className="secoundButton" onClick={() => Navigate("/signup")}>
          Sign Up
        </button>
      </div>

      <div className="signInForm">
        <h1 className="title">Sign In</h1>

        <input
          className="label1"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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
      </div>
    </div>
  );
}
