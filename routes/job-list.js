const express = require('express')

const router = express.Router();

router.get('/job-list', (req, res) => {
    res.render('job-list', { title: 'Job Lists' })
})

module.exports = router;