const express = require('express')
const UNI = require("../schemas/university")
const router = express.Router();

router.get('/university-list', async (req, res) => {
  let universities;
  await UNI.find()
    .then((result) => {
      universities = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render('university-list', { title: 'University List', universities })
})

module.exports = router;