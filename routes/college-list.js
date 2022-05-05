const express = require("express");

const router = express.Router();

router.get("/college-list", (req, res) => {
  res.render("college-list", { title: 'College Lists' });
});

module.exports = router;
