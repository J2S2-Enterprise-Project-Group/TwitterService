/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.com>
 */
var express = require('express');
var router = express.Router();
var Twitter = require('../config/twitter-config');
const TwitterAccount = require('../auth/account');

/* List Tweets */
/**
 * Your code and Description Goes here
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */
router.get('/', function(req, res, next) {
    TwitterAccount.getInfo(account => {
        return account
    }).then(account => {
        Twitter.get('statuses/user_timeline', { screen_name: account.screen_name, count: 100 }, (err, data, response) => {
            res.json(data);
        })
        .catch((err) => {
            console.log('caught error', err.stack)
        });
    })
});

module.exports = router;
