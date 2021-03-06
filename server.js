var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')

// var index = require('./routes/index')
var brewerylocator = require('./routes/brewerylocator')
var yeast = require('./routes/yeast')
var hops = require('./routes/hops')
var style = require('./routes/style')
var fermentables = require('./routes/fermentables')
var featured = require('./routes/featured')
var adjuncts = require('./routes/adjuncts')
var search = require('./routes/search')
var mongoose = require('mongoose')

// DB Setup
// mongoose.connect('mongodb_URL')

var app = express()
app.set('port', process.env.PORT || 3001)

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
// app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', index)
app.use('/brewerylocator', brewerylocator)
app.use('/yeast', yeast)
app.use('/fermentables', fermentables)
app.use('/adjuncts', adjuncts)
app.use('/hops', hops)
app.use('/style', style)
app.use('/featured', featured)
app.use('/search', search)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  // res.status(err.status || 500)
  // res.render('error')
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})

module.exports = app
