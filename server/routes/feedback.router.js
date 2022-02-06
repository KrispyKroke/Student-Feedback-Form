const express = require('express');
const { reset } = require('nodemon');
let router = express.Router();
const pool = require('../modules/pool.js');

// Server-side POST route for adding feedback to the database
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

// Server-side GET route for retrieving all feedback from the database for 
// display on the Admin page
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM feedback ORDER BY "id" DESC;';
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});





module.exports = router;