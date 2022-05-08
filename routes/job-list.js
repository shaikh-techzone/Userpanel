const express = require('express')
const JOBS = require("../schemas/job")
const router = express.Router();

router.get('/job-list', async (req, res) => {
    let jobs;
    await JOBS.find()
        .then((result) => {
            jobs = result;
        })
        .catch((err) => {
            console.log(err);
        });
    res.render('job-list', { title: 'Job Lists', jobs })
})

module.exports = router;