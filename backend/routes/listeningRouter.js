const listenApi = require('express').Router();
const { Router } = require('express');
const listenController = require('../controllers/listeningController');
const { authentication, authRole } = require('../middlewares/authMiddleware');

listenApi.get('/get-by-topic/:topic', listenController.getByTopic);
listenApi.get('/get-all',listenController.getAll);
listenApi.post('/post', listenController.postListening);
listenApi.put('/put/:listenId', listenController.putListen);
listenApi.delete('/delete/:listenId', listenController.deleteListen);
listenApi.get('/get-topics',listenController.getByTopic);
listenApi.get('/get-by-id/:listenId', listenController.getDetails);

module.exports = listenApi;
