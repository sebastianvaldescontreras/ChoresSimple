const express = require('express');
var choreService = require('../service/ChoresService.js');
const choresController = express();

choresController.set('port', process.env.PORT || 8080);
choresController.set('view engine','jade');

choresController.use(express.json());

choresController.post('/chore', function (request, response){
  response.send(choreService.insertChore(request.body));
});

choresController.put('/chore', function (request, response){
  response.send(choreService.updateChore(request.body));
});

choresController.get('/chore', function (request, response){
  response.send(choreService.selectChore());
});

choresController.delete('/chore', function (request, response){
  response.send(choreService.deleteChore(request.body));
});

choresController.get('/', function (request,response) {
  response.render('index');
});

module.exports = choresController;



