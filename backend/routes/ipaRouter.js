const ipaApi = require('express').Router();
const ipaController = require('../controllers/ipaController');
const { authentication, authRole } = require('../middlewares/authMiddleware');

ipaApi.get('/get--by-id/:id',ipaController.getById);
ipaApi.post('/post', ipaController.postIPA);
ipaApi.put('/put/:grammarId', ipaController.putIPA);
ipaApi.delete('/delete-by-id/:id', ipaController.deleteById);
ipaApi.delete('/delete-by-listenid/:listenId', ipaController.deleteByListenId);

module.exports = ipaApi;
