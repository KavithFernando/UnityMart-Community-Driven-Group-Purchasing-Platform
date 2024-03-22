const express = require("express");
const User = require("../models/userModels");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleWare/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

router.delete("/users", async (req, res) => {
  try {
    // Delete all users from the database
    await User.deleteMany({});
    res
      .status(200)
      .json({ success: true, message: "All users deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
