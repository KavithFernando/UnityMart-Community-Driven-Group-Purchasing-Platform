import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp({ close, open }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [bORs, set_bORc] = useState(false);
  const [errors, setErrors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [reEntedPasswordVisible, setReEntedPasswordVisible] = useState("");
  const [reEntedPassword, setReEntedPassword] = useState("");

  const handleSubmit = () => {
    const errors = validate();

    setTimeout(() => {
      creatUser(errors);
      creatChatUser(errors);
    }, 10);
    setErrors(errors);
    //console.log(errors);

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

    if (!userName) {
      error.userName = "User Name is Required.";
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

    if (!reEntedPassword) {
      error.reEnted = "Password is Required.";
    } else if (!(reEntedPassword === password)) {
      error.reEnted = "The passwords did not match. Try again.";
    } else {
      error.reEnted = null;
    }

    return error;
  };

  const creatUser = async (errors1) => {
    console.log(errors1);

    try {
      if (
        errors1.name === null &&
        errors1.password === null &&
        errors1.reEnted === null &&
        errors1.email === null &&
        errors1.userName === null
      ) {
        const { data } = await axios.post("http://localhost:8080/user/add", {
          name,
          email,
          userName,
          password,
          bORs,
        });

        const id = data.newUser._id;
        setIsAuthenticated(true);
        localStorage.setItem("userId", id)

        toast.success("Registration is successful", {
          // position: toast.POSITION.TOP_RIGHT,
        });

        setTimeout(() => {
          close();
        }, 2000);
        //close();
      } else {
        console.log("cant");
      }
    } catch {
      toast.error("this user already exists ", {
        // position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const creatChatUser = async (errors1) => {
    try {
      if (
        errors1.name === null &&
        errors1.password === null &&
        errors1.reEnted === null &&
        errors1.email === null &&
        errors1.userName === null
      ) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:8000/api/user",
          {
            name,
            email,
            userName,
            password,
          },
          config
        );
        console.log(data);

        localStorage.setItem("userInfo", JSON.stringify(data));
      } else console.log("cant2");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singUpbody ">
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
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && <div className="error">{errors.userName}</div>}
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
              <input type="radio" name="account" defaultChecked />
              Buyer
            </label>
          </div>
          <button className="button" onClick={handleSubmit}>
            Sign Up
          </button>
          <ToastContainer />
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
