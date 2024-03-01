const express = require("express");
const users = require("../Modal/UserModal");

const router = express.Router();

//add user

router.post("/user/add", async (req, res) => {
  let newUser = new users(req.body);

  try {
    await newUser.save();
    return res.status(200).json({ success: "user save successful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
