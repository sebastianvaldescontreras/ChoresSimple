const express = require('express');
var choreService = require('../service/ChoresService.js');
const choresController = express();

choresController.set('port', process.env.PORT || 8080);
choresController.set('view engine','jade');

choresController.use(express.json());

choresController.post('/chore', function (request, response){
  choreService.insertChore(request.body).then(function(result){
    response.send(result);
  });
});

choresController.put('/chore', function (request, response){
  choreService.updateChore(request.body).then(function(result){
    response.send(result);
  });
});

choresController.get('/chore', function (request, response){
  choreService.selectChore().then(function(result){
    response.send(result);
  });
});

choresController.delete('/chore', function (request, response){
  choreService.deleteChore(request.body).then(function(result){
    response.send(result);
  });
});

choresController.get('/', function (request,response){
  choreService.selectChore().then(function(result){
    response.render('index',
    {results:result});
  });
});

module.exports = choresController;



