const express = require('express')
const COLLG = require("../schemas/college")
const router = express.Router();

router.get('/college-list', async (req, res) => {
  let colleges;
  await COLLG.find()
    .then((result) => {
      colleges = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render('college-list', { title: 'College List', colleges })
})

module.exports = router;