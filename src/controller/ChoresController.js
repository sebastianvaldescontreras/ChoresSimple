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

//MODE TEST NOT RESPONSE FROM SERVICE CORRECT HELPME WORLD
choresController.get('/', function (request,response) {
  response.render('index',
  {results:[{id: '1', name: 'post ', description:'insert'},
            {id: '2', name: 'put', description:'update'},
            {id: '3', name: 'delete', description:'delete'},
            {id: '3', name: 'select', description:'select'}]});
});

module.exports = choresController;



