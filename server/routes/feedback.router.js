const express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
    const submission = req.body;
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, 
    [submission.feeling, submission.understanding, submission.support, submission.comments]).then(() => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});





module.exports = router;