const express = require('express');
const data = require('./data.js');
const mustacheExpress = require('mustache-express');

const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/users', function (req, res){
  res.render('data', data);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
