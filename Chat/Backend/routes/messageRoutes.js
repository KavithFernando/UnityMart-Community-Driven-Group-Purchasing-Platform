const express = require("express");
const { sendMessage } = require("../controllers/messageController");
const { allMessages } = require("../controllers/messageController");
const { protect } = require("../middleWare/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
