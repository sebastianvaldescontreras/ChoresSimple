const express = require('express');
var choreService = require('../service/ChoresService.js');
const choresController = express();

choresController.set('port', process.env.PORT || 8080);
choresController.set('view engine','jade');

choresController.use(express.json());

choresController.post('/chore', async function (request, response){
    response.send(choreService.insertChore(request.body));
});

choresController.put('/chore', async function (request, response){
    response.send(await choreService.updateChore(request.body));
});

choresController.get('/chore', async function (request, response){
    response.send(await choreService.selectChore());
});

choresController.delete('/chore', async function (request, response){
    response.send(await choreService.deleteChore(request.body));
});

choresController.get('/', function (request,response){
  choreService.selectChore().then(function(result){
    response.render('index',
    {results:result});
  });
});

module.exports = choresController;



