const data = require('../models/data.js');
module.exports = {
  users: function (req, res){
    // 'data' in the res.render statement below identifies the template name
    // data in the res.render statement is pulling from this app.js file.
    res.render('data', data);
  },
  user: function (req, res){
    var id = req.params.id;
    var user = data.users.find(function(user){
      return user.id == id;
    });

    console.log('user',user);

    res.render('user',user);

  }
};
