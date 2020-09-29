/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
var Twit = require('twit')

var Twitter = new Twit({
  consumer_key:         '3VYicmLoRYpM6bqIgcWNA2duN',
  consumer_secret:      'VCLgl1ASqvnUxDEBaBsSPA1QiuY4I0KZGTIy7IA6Sb5XJQXDAk',
  access_token:         '1308124367159660544-Tr2gaTLAL9qg0OHjJrAXii3q7VI04G',
  access_token_secret:  'zodDWqEu2itYxc7qBE9V2OoT2ezP2dL8TuVo4Cc1hGfSs',
  timeout_ms:           60*1000,  // timeout to apply to all requests.
  strictSSL:            false,     // optional - requires SSL certificates to be valid.
})

module.exports = Twitter;
