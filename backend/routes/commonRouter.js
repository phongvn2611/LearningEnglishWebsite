const commonRouter = require('express').Router();
const commonController = require('../controllers/commonController');
commonRouter.get('/word-pack/total', commonController.getTotalWordPack);
module.exports = commonRouter;
