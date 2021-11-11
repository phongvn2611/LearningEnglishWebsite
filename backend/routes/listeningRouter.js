const listenApi = require('express').Router();
const { Router } = require('express');
const listenController = require('../controllers/listeningController');
const { authentication, authRole } = require('../middlewares/authMiddleware');

listenApi.get('/get-listen-by-topic/:topic',authentication, listenController.getByTopic);
//listenApi.get('/get-listen-by-level/:level', authentication, listenController.getByLevel);
listenApi.get('/get-all-listen', authentication,listenController.getAll);
listenApi.post('/post-listen',listenController.postListening);
listenApi.put('/put-listen/:listenId', authentication, listenController.putListen);
listenApi.delete('/delete-listen/:listenId', authentication, listenController.deleteListen);
listenApi.get('/get-listen-topics', authentication, listenController.getByTopic);
listenApi.get('/get-listen-by-id/:listenId',authentication, listenController.getDetails);
listenApi.get('/search-listen/:level', authentication, listenController.getSearchListen);

module.exports = listenApi;
