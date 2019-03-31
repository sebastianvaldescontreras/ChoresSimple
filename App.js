var app = require('./src/controller/ChoresController');

var port = app.get('port');

app.listen(port, function () {
  console.log('Chores listening on port: '+ port +'!');
});
