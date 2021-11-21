const listenApi = require('express').Router();
const { Router } = require('express');
const listenController = require('../controllers/listeningController');
const { authentication, authRole } = require('../middlewares/authenticationMiddleware');

listenApi.get('/get-listen-by-topic/:topic',authentication, listenController.getByTopic);
listenApi.get('/get-listening/:id',authentication, listenController.getListening);
listenApi.get('/get-all-listen', authentication,listenController.getAll);
listenApi.post('/post-listen',listenController.postListening);
listenApi.put('/put-listen/:id', authentication, listenController.putListen);
listenApi.delete('/delete-listen/:id', authentication, listenController.deleteListen);
listenApi.get('/get-listen-topics', authentication, listenController.getByTopic);
listenApi.get('/get-listen-by-id/:id', listenController.getDetails);
//listenApi.get('/search-listen/:level', authentication, listenController.getSearchListen);

module.exports = listenApi;
