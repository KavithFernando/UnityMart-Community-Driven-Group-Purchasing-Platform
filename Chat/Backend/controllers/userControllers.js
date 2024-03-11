const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, userName, email, password } = req.body;

  if (!name || !email || !userName || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ userName });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const userExistsemail = await User.findOne({ userName });

  const user = await User.create({
    name,
    email,
    userName,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      mail: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const user = await User.find(keyword).find({ _id: { $ne: req.user._id } });

  res.send(user);
});

module.exports = { registerUser, authUser, allUsers };
