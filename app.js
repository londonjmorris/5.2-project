const express = require('express');
const data = require('./data.js');
const mustacheExpress = require('mustache-express');

const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/users', function (req, res){
  // 'data' in the res.render statement below identifies the template name
  // data in the res.render statement is pulling from this app.js file.
  res.render('data', data);
});

app.get('/users/:id', function (req, res){
  var id = req.params.id;
  var user = data.users.find(function(user){
    return user.id == id;
  });

  console.log('user',user);

  res.render('user',user);

});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
