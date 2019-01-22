var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouter = require('./routes/paws');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/PawPlacement')));
app.use('/', express.static(path.join(__dirname, 'dist/PawPlacement')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, provide error only in dev
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// create error page
	res.status(err.status || 500);
	res.send(err.status);
});

module.exports = app;