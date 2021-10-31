const grammarApi = require('express').Router();
const grammarController = require('../controllers/grammar.controller');

grammarApi.get('/get-by-id/:id', grammarController.getById);
grammarApi.get('/get-by-listenid/:listenId', grammarController.getByLiteningId);
grammarApi.post('/post-by-listen/:listenId', grammarController.postGrammarByListen);
grammarApi.post('/post', grammarController.postGrammar);
grammarApi.put('/put/:grammarId', grammarController.putGrammar);
grammarApi.delete('/delete-by-id/:id', grammarController.deleteById);
grammarApi.delete('/delete-by-listenid/:listenId', grammarController.deleteByListenId);

module.exports = grammarApi;
