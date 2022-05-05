const express = require("express");

const router = express.Router();

router.get("/scholarship-list", (req, res) => {
  res.render("scholarship-list", { title: 'Scholarship Lists' });
});

module.exports = router;
