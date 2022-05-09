const express = require("express");
const UNI = require("../schemas/university");
const router = express.Router();

router.get("/university-detail/:id", async (req, res) => {
  let id, university;
  id = req.params.id;
  await UNI.findById(id)
    .then((result) => {
      university = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("university-detail", { title: "University Detail", university });
});

module.exports = router;
