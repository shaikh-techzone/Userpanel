const express = require("express");

const router = express.Router();

router.get("/scholarship-detail", (req, res) => {
  res.render("scholarship-detail", { title: "Scholarship Detail" });
});

module.exports = router;
