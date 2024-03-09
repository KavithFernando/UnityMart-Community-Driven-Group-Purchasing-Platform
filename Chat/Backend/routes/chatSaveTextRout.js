const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/updateFile", async (req, res) => {
  const { content } = req.body;

  // Write updated content to the text file
  fs.appendFile("data.txt", content, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating file");
      return;
    }
    res.status(200).send("File updated successfully");
  });
});

router.post("/clearFile", async (req, res) => {
  const { content } = req.body;

  // Write updated content to the text file
  fs.writeFile("data.txt", content, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating file");
      return;
    }
    res.status(200).send("File updated successfully");
  });
});

module.exports = router;
