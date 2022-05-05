const express = require("express");

const router = express.Router();

router.get("/university-list", (req, res) => {
  res.render("job-list");
});

module.exports = router;
