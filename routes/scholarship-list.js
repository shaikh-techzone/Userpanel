const express = require("express");

const router = express.Router();

router.get("/scholarship-list", (req, res) => {
  res.render("job-list");
});

module.exports = router;
