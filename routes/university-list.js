const express = require("express");

const router = express.Router();

router.get("/university-list", (req, res) => {
  res.render("university-list", { title: 'University Lists' });
});

module.exports = router;
