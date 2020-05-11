var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index')
const port = 3000;
//var indexRouter = require('./routes/index');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// set up static assets to be accessed
// from the public folder
app.use(express.static(path.join(__dirname, "public")));
// tell express to use .json to read incoming
// json data
app.use(express.json());
//app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, () =>  { 
  console.log(`This app is listening on port ${port}`)
});


app.use('/', indexRouter);



app.use(function (req, res, next) {
  console.log("404 error occurred requested resource could not be served.");
  res.render('error');
});