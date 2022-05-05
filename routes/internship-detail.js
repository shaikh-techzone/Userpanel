const express = require("express");

const router = express.Router();

router.get("/internship-detail", (req, res) => {
  res.render("internship-detail", { title: "Internship Detail" });
});

module.exports = router;
