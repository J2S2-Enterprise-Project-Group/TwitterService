/**
 * @author Jocelyn Baduria <jocelyn.baduria@sjsu.com>
 */
var express = require('express');
var router = express.Router();
var Twitter = require('../config/twitter-config');
const TwitterAccount = require('../auth/account');


/* Delete Tweets */
/**
 * This function handles removing of the tweets.
 *  @author Jagruti Mohanty<jagruti.mohanty@sjsu.edu> 
 *  @author  Jocelyn Baduria<jocelyn.baduria@sjsu.edu>
 */
router.post('/', function (req, res, next) {
	Twitter.post('statuses/destroy/:id', req.body, function (err, data, response) {
		res.json(response);
	});
});

module.exports = router;
