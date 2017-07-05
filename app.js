const express = require('express');
const mustacheExpress = require('mustache-express');
const userController = require("./controllers/user");
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/users', userController.users);

app.get('/users/:id', userController.user);

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
