const express = require('express')
const INTERN = require("../schemas/internship")
const router = express.Router();

router.get('/internship-list', async (req, res) => {
  let internships;
  await INTERN.find()
    .then((result) => {
      internships = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render('internship-list', { title: 'Internship List', internships })
})

module.exports = router;