const express = require("express");
const users = require("../Modal/ProductModal");

const router = express.Router();

//adding the order to the db
router.post("/Order/save", async (req, res) => {
    let newPost = new posts(req.body);
  
    try {
      await newPost.save();
      return res.status(200).json({ success: "Order saved successfully" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  });
  