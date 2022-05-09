const express = require("express");
const COLLEGE = require("../schemas/college");
const router = express.Router();

router.get("/college-detail/:id", async (req, res) => {
  let id, college;
  id = req.params.id;
  await COLLEGE.findById(id)
    .then((result) => {
      college = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("college-detail", { title: "College Detail", college });
});

module.exports = router;
