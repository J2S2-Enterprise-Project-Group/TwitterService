/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
var Twit = require('twit')
 
var Twitter = new Twit({
  consumer_key:         'YSqTdwKJ5T9rw061P1yZPvew8',
  consumer_secret:      'j9YvBO9HkkK6YmlB4kpny54qtVu5OSmqqFvf6HCEHREj1744f3',
  access_token:         '43531566-oPdYMvJxw2soo4R8G6BwK9xPmsV9RmUkTCPwb67zN',
  access_token_secret:  'gDhWoj7BX6TN4FZA5V69cdrQyLYqeFupt3qmWNJgIEsoJ',
  timeout_ms:           60*1000,  // timeout to apply to all requests.
  strictSSL:            false,     // optional - requires SSL certificates to be valid.
})

module.exports = Twitter;
