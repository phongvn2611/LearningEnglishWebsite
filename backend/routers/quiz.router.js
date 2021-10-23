const quizApi = require('express').Router();
const { Router } = require('express');
const quizController = require('../controllers/quiz.controller');

quizApi.get('/get-by-id/:id', quizController.getById);
quizApi.get('/get-by-listenid/:listenId', quizController.getByLiteningId);
quizApi.post('/post/:listenId', quizController.postQuiz);
quizApi.delete('/delete-by-listenid/:listenId', quizController.deleteByListenId);
quizApi.delete('/delete-by-id/:id', quizController.deleteById);

module.exports = quizApi;
