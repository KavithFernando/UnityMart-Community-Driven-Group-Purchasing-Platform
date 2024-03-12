const express = require("express");
const products = require("../Modal/ProductModal");
const router = express.Router();

//adding the order to the db
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Front End/src/ProductImages"); // Specify where to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Specify filename
  },
});
const upload = multer({ storage });

router.post("/product/save", upload.single("photo"), async (req, res) => {
  console.log("File uploaded:", req.file);
  const newProduct = new products({
    productName: req.body.productName,
    category: req.body.category,
    reach: req.body.reach,
    discountPrice: req.body.discountPrice,
    storePrice: req.body.storePrice,
    description: req.body.description,
    photo: req.file.filename,
    sellerID: req.body.sellerID,
  });
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

// get all products
router.get("/products", async (req, res) => {
  try {
    const allProducts = await products.find();
    return res.status(200).json({ products: allProducts });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

// get top 10 almost complete products
router.get("/top-products", async (req, res) => {
  try {
    const topProducts = await products
      .find()
      .sort({ currentReachRatio: -1 })
      .limit(10);

    return res.status(200).json({ topProducts });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
