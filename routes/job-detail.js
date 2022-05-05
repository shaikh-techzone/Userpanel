const express = require("express");

const router = express.Router();

router.get("/job-detail", (req, res) => {
  res.render("job-detail", { title: "Job Detail" });
});

module.exports = router;
