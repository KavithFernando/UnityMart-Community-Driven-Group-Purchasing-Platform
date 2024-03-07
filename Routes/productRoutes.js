const express = require("express");
const products = require("../Modal/ProductModal");

const router = express.Router();

//adding the order to the db
router.post("/product/save", async (req, res) => {
  let newProduct = new products(req.body);

  try {
    await newProduct.save();
    return res.status(200).json({ success: "Order saved successfully" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//update the order
router.put("/product/update/:id", async (req, res) => {
  try {
    await products.findByIdAndUpdate(req.params.id, { $set: req.body });
    return res.status(200).json({ success: "post update successful" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

//delete an order
router.delete("/product/delete/:id", async (req, res) => {
  try {
    await products.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: "Order  deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
