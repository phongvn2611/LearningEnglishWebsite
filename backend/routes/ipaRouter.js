const ipaApi = require('express').Router();
const ipaController = require('../controllers/ipaController');
const { authentication, authRole } = require('../middlewares/authMiddleware');

ipaApi.get('/get-ipa-all', ipaController.getAllIPAs);
ipaApi.get('/get-by-id/:id',ipaController.getById);
ipaApi.post('/post', ipaController.postIPA);
ipaApi.put('/put/:ipaId', ipaController.putIPA);
ipaApi.delete('/delete-by-id/:id', ipaController.deleteById);

module.exports = ipaApi;
