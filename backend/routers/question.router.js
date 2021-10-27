const questionApi = require('express').Router();
const questionController = require('../controllers/question.controller');

questionApi.get('/get-by-id/:questionId', questionController.getById);
questionApi.get('/get-by-quizId/:quizId', questionController.getByQuizId);
questionApi.post('/post/:quizId', questionController.postQuestion);
questionApi.put('/put/:questionId', questionController.putQuestion);
questionApi.delete('/delete-by-id/:id', questionController.deleteById);
questionApi.delete('/delete-by-quizid/:quizId', questionController.deleteByQuizId);

module.exports = questionApi;
