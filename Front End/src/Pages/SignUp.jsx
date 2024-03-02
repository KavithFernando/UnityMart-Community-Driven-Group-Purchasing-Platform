import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import axios from "axios";

export default function SignUp({ close, open }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bORs, set_bORc] = useState("");
  const [errors, setErrors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [reEntedPasswordVisible, setReEntedPasswordVisible] = useState("");
  const [reEntedPassword, setReEntedPassword] = useState("");

  const handleSubmit = () => {
    const errors = validate();
    setErrors(errors);

    setTimeout(() => {
      creatUser();
    }, 10000);

    //console.log(name, password, email, bORs);
  };

  const validate = () => {
    const error = {};
    if (!name) {
      error.name = "Name is Required.";
    } else {
      error.name = null;
    }
    if (!email) {
      error.email = "Email is Required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "The Email is Invalid.";
    } else {
      error.email = null;
    }

    if (!password) {
      error.password = "Password is Required.";
    } else if (password.length < 8) {
      error.password = "Use 8 or more characters for your password.";
    } else {
      error.password = null;
    }

    if (!reEntedPassword) {
      error.reEnted = "Password is Required.";
    } else if (!(reEntedPassword === password)) {
      error.reEnted = "The passwords did not match. Try again.";
    } else {
      error.reEnted = null;
    }

    return error;
  };

  const creatUser = async () => {
    if (
      Object.values(errors).every((error) => error === null)
      //errors.name === "" &&
      //errors.password === "" &&
      // errors.reEntedPassword === "" &&
      //errors.email === ""
    ) {
      try {
        const { data } = await axios.post("http://localhost:8080/user/add", {
          name,
          email,
          password,
          bORs,
        });
        console.log({ data });
        // close();
      } catch {
        ("");
      }
    } else {
      console.log("cant");
    }
  };

  return (
    <div className="body">
      <div className="signUpContainer">
        <div className="signUpForm">
          <h1 className="title">Create Account</h1>
          <div className="formeAline">
            <input
              className="label"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
            <input
              className="label"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            <input
              className="label"
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

            <div className="reEntedPassworPosition">
              <input
                className="label"
                type={reEntedPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setReEntedPassword(e.target.value)}
              />

              <div
                className="seeReEnted"
                onClick={() =>
                  setReEntedPasswordVisible(!reEntedPasswordVisible)
                }
              >
                {reEntedPasswordVisible ? (
                  <EyeOutlined />
                ) : (
                  <EyeInvisibleOutlined />
                )}
              </div>
              {errors.reEnted && (
                <div className="reEntedPasswordError">{errors.reEnted}</div>
              )}
            </div>
          </div>
          <div className="radioButtonPart">
            <label className="radioButton" onClick={() => set_bORc(true)}>
              <input type="radio" name="account" />
              Seller
            </label>
            <label className="radioButton" onClick={() => set_bORc(false)}>
              <input type="radio" name="account" />
              Buyer
            </label>
          </div>
          <button className="button" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>

        <div className="rightPanel">
          <button
            className="closeButton"
            onClick={() => {
              close();
            }}
          >
            X
          </button>
          <h1 className="title">Already a Registered User?</h1>
          <p className="paragraph">
            Please enter your Email and Password to Login.
          </p>
          <button
            className="secoundButton"
            onClick={() => {
              close();
              open();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
