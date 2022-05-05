const express = require("express");

const router = express.Router();

router.get("/university-detail", (req, res) => {
  res.render("university-detail", { title: "University Detail" });
});

module.exports = router;
