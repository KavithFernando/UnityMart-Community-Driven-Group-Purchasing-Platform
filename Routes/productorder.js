const express = require("express");
const users = require("../Modal/ProductModal");

const router = express.Router();

//adding the order to the db
router.post("/Order/save", async (req, res) => {
    let newOrder = new users(req.body);
  
    try {
      await newOrder.save();
      return res.status(200).json({ success: "Order saved successfully" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  });



//update the order
router.put("/Order/update/:id", async (req, res) => {
    try {
      await posts.findByIdAndUpdate(req.params.id, { $set: req.body });
      return res.status(200).json({ success: "post update successful" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  });  