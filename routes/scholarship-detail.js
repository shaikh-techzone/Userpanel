const express = require("express");

const SCHOLAR = require("../schemas/scholarship");

const router = express.Router();

router.get("/scholarship-detail/:id", async (req, res) => {
  let id, scholarships;
  id = req.params.id;
  await SCHOLAR.findById(id)
    .then((result) => {
      scholarships = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("scholarship-detail", { title: "Scholarship Detail", scholarships });
});

module.exports = router;
