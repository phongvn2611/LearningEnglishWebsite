const wordApi = require('express').Router();
const { Router } = require('express');
const wordController = require('../controllers/word.controller');

wordApi.get('/get-all', wordController.getAllWords);
wordApi.post('/post', wordController.postContributeWord);
wordApi.put('/put/:wordId', wordController.putContributeWord);
wordApi.delete('/delete/:wordId', wordController.deleteWord);
wordApi.get('/exist', wordController.getCheckWordExistence);
wordApi.get('/pack', wordController.getWordPack);
wordApi.get('/search', wordController.getSearchWord);
wordApi.get('/details/:wordId', wordController.getWordDetails);

module.exports = wordApi;
