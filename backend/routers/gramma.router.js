const grammaApi = require('express').Router();
const grammaController = require('../controllers/gramma.controller');

grammaApi.get('/get-by-id/:id', grammaController.getById);
grammaApi.get('/get-by-listenid/:listenId', grammaController.getByLiteningId);
grammaApi.post('/post/:listenId', grammaController.postGramma);
grammaApi.put('/put/:grammaId', grammaController.putGramma);
grammaApi.delete('/delete-by-id/:id', grammaController.deleteById);
grammaApi.delete('/delete-by-listenid/:listenId', grammaController.deleteByListenId);

module.exports = grammaApi;
