/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.com>
 */

var express = require('express');
var router = express.Router();

module.exports = router;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var listTweetsRouter = require('./routes/list-tweet');
var createTweetRouter = require('./routes/create-tweet');
var retrieveTweetRouter = require('./routes/retrieve-tweet');
var deleteTweetRouter = require('./routes/delete-tweet');

var app = express();

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', listTweetsRouter);
app.use('/create', createTweetRouter);
app.use('/retrieve', retrieveTweetRouter);
app.use('/delete', deleteTweetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
