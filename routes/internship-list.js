const express = require("express");

const router = express.Router();

router.get("/internship-list", (req, res) => {
  res.render("internship-list", { title: 'Internship Lists' });
});

module.exports = router;
