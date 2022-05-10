const express = require("express");

const INTERN = require("../schemas/internship");

const router = express.Router();

router.get("/internship-detail/:id", async (req, res) => {
  let id, internships;
  id = req.params.id;
  await INTERN.findById(id)
    .then((result) => {
      internships = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render("internship-detail", { title: "Internship Detail", internships });
});

module.exports = router;
