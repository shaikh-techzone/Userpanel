const express = require("express");

const JOBS = require("../schemas/job");

const router = express.Router();

router.get("/", async (req, res) => {
  let jobs;
  await JOBS.find()
    .then((result) => {
      jobs = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("index", { title: "Home", jobs });
});

module.exports = router;
