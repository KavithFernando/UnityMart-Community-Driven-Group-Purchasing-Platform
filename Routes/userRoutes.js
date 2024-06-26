const express = require("express");
const users = require("../Modal/UserModal");

const router = express.Router();

//add user

router.post("/user/add", async (req, res) => {
  const { name, email, userName, password, bORs } = req.body;

  const userExists = await users.findOne({ userName });

  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  } else {
    const userExistsemail = await users.findOne({ email });
    if (userExistsemail) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      const newUser = new users({ name, email, userName, password, bORs });
      try {
        await newUser.save();
        return res
          .status(200)
          .json({ success: "user save successful", newUser });
      } catch (err) {
        return res.status(400).json({ error: err });
      }
    }
  }
});

//user log in
router.post("/user/login", async (req, res) => {
  const { userName, password } = req.body;

  const user = await users.findOne({ userName: userName });
  if (user) {
    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({ success: "User login successful", user });
    } else {
      return res.status(401).json({ error: "Invalid  password" });
    }
  } else {
    return res.status(401).json({ error: "Invalid  " });
  }
});

// get user by ID
router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await users.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userData = {
      name: user.name,
      userName: user.userName,
      email: user.email,
      bORs: user.bORs,
    };

    return res.status(200).json(userData);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// Add a product and its count to purchasedProducts map
router.put("/user/purchase/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { productId, quantity } = req.body;
    const user = await users.findById(userId);

    if (user) {
      if (user.purchasedProducts.has(productId)) {
        return res
          .status(400)
          .json({ error: "Product already exists in purchased products" });
      } else {
        const updatedUser = await users.findByIdAndUpdate(
          userId,
          { $set: { [`purchasedProducts.${productId}`]: quantity } },
          { new: true }
        );
        return res
          .status(200)
          .json({ success: "Purchased products updated successfully" });
      }
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Remove a product and its count from purchasedProducts map
router.put("/user/remove-purchase/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { productId } = req.body;

    const user = await users.findById(userId);
    const quantity = user.purchasedProducts.get(productId);

    const updatedUser = await users.findByIdAndUpdate(
      userId,
      { $unset: { [`purchasedProducts.${productId}`]: 1 } },
      { new: true }
    );
    return res.status(200).json({
      success: "Product removed from purchased products successfully",
      quantity: quantity,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

//get buyer details and que
router.get("/buyer/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await users.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else {
      if (user.bORs === false) {
        const productKeys = Array.from(user.purchasedProducts.keys());
        return res.status(200).json({ key: productKeys, data: user });
      } else {
        return res.status(404).json({ error: "thi is seller" });
      }
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.get("/user/purchasedProduct/:userId/:productId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;

    // Find the user by ID
    const user = await users.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the product ID exists in purchasedProducts
    if (user.purchasedProducts.has(productId)) {
      const quantity = user.purchasedProducts.get(productId);
      return res.status(200).json(quantity);
    } else {
      return res
        .status(404)
        .json({ error: "Product not found in purchased products" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/seller/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await users.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else {
      if (user.bORs === true) {
        return res.status(200).json({ data: user });
      } else {
        return res.status(404).json({ error: "thi is buyer" });
      }
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

//all users deleted

router.delete("/users123", async (req, res) => {
  try {
    // Delete all users from the database
    await users.deleteMany({});
    res
      .status(200)
      .json({ success: true, message: "All users deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
