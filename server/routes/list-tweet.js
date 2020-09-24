/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.com>
 */
var express = require('express');
var router = express.Router();
var Twitter = require('../config/twitter-config');

/* List Tweets*/
/**
 * Your code and Description Goes here
 * @author unknown
 */
router.get('/', function(req, res, next) {
  res.json({message:'List of Tweets'});
});

module.exports = router;
