/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
var Twit = require('twit')
 
var Twitter = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // timeout to apply to all requests.
  strictSSL:            false,     // optional - requires SSL certificates to be valid.
})

module.exports = Twitter;
