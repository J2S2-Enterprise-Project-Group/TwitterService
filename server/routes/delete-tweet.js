/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.com>
 */
var express = require('express');
var router = express.Router();
var Twitter = require('../config/twitter-config');

/* Delete Tweets */
/**
 * Your code and Description Goes here
 * @author unknown
 */
router.get('/:id', function(req, res, next) {

  res.json({message:'Tweet Deleted by ID - Id Is '+req.params.id});
});

module.exports = router;
