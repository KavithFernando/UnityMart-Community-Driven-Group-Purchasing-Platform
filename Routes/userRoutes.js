const express = require("express");
const users = require("../Modal/UserModal");

const router = express.Router();

//add user

router.post("/user/add", async (req, res) => {
  //let newUser = new users(req.body);
  const { name, email, password, bORs } = req.body;

  const userExists = await users.findOne({ email });

  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  } else {
    const passwordExists = await users.findOne({ password });
    if (passwordExists) {
      return res.status(400).json({ error: "password already exists" });
    } else {
      const newUser = new users({ name, email, password, bORs });
      try {
        await newUser.save();
        return res.status(200).json({ success: "user save successful" });
      } catch (err) {
        return res.status(400).json({ error: err });
      }
    }
  }
});

//user log in

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await users.findOne({ email: email });
  if (user) {
    if (user.password === password) {
      return res.status(200).json({ success: "User login successful", user });
      console.log("suxx");
    } else {
      return res.status(401).json({ error: "Invalid  password" });
    }
  } else {
    return res.status(401).json({ error: "Invalid  " });
  }
});
module.exports = router;
