const express = require("express");

const JOBS = require("../schemas/job");

const router = express.Router();

router.get("/job-detail/:id", async (req, res) => {
  let id, job;
  id = req.params.id;
  await JOBS.findById(id)
    .then((result) => {
      job = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("job-detail", { title: "Job Detail", job });
});

module.exports = router;
