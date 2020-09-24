/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.com>
 */
var express = require('express');
var router = express.Router();
var Twitter = require('../config/twitter-config');

/* Retrieve Tweets */
/**
 * Your code and Description Goes here
 * @author unknown
 */
router.get('/:id', function(req, res, next) {
    res.json({message:'Tweet Retrieved for ID - '+req.params.id});
});

module.exports = router;
