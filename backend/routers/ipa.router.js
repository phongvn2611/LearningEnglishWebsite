const ipaApi = require('express').Router();
const ipaController = require('../controllers/ipa.controller');

ipaApi.get('/get-by-id/:id', ipaController.getById);
ipaApi.get('/get-by-listenid/:listenId', ipaController.getByLiteningId);
ipaApi.post('/post', ipaController.postIPA);
ipaApi.put('/put/:grammarId', ipaController.putIPA);
ipaApi.delete('/delete-by-id/:id', ipaController.deleteById);
ipaApi.delete('/delete-by-listenid/:listenId', ipaController.deleteByListenId);

module.exports = ipaApi;
