const express = require("express");
const { protect } = require("../middleWare/authMiddleware");
const { accessChat } = require("../controllers/chatControlle");
const { fetchChats } = require("../controllers/chatControlle");
const { createGroupChat } = require("../controllers/chatControlle");
const { renameGroup } = require("../controllers/chatControlle");
const { removeFromGroup } = require("../controllers/chatControlle");
const { addToGroup } = require("../controllers/chatControlle");
const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
