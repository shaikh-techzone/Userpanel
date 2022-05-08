const express = require('express')
const SCHOLAR = require("../schemas/scholarship")
const router = express.Router();

router.get('/scholarship-list', async (req, res) => {
  let scholarships;
  await SCHOLAR.find()
    .then((result) => {
      scholarships = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render('scholarship-list', { title: 'Scholarship List', scholarships })
})

module.exports = router;