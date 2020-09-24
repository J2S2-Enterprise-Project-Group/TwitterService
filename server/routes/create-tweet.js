/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
var express = require('express');
var router = express.Router();
var Twitter = require('../config/twitter-config');

/* GET home page. */
/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
router.post('/', function(req, res, next) {
  Twitter.post('statuses/update', req.body.status, function(err, data, response) {
    res.json(response);
  });
});

module.exports = router;
