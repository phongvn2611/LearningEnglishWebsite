const ipaApi = require('express').Router();
const ipaController = require('../controllers/ipaController');
const { authentication, authRole } = require('../middlewares/authenticationMiddleware');

ipaApi.get('/get-all-ipa',authentication, ipaController.getAllIPAs);
ipaApi.get('/get-ipa-by-id/:id',authentication, ipaController.getById);
ipaApi.post('/post-ipa', ipaController.postIPA);
ipaApi.put('/put-ipa/:id',authentication, ipaController.putIPA);
ipaApi.delete('/delete-ipa/:id',authentication, ipaController.deleteById);
ipaApi.get('/get-ipa-by-type/:type',authentication, ipaController.getIPAsByType);
ipaApi.get('/get-ipa-relative',ipaController.getIPARelative);

module.exports = ipaApi;
