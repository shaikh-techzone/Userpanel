const express = require("express");

const router = express.Router();

router.get("/college-detail", (req, res) => {
  res.render("college-detail", { title: "College Detail" });
});

module.exports = router;
