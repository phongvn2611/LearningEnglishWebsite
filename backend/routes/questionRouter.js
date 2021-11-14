const questionApi = require('express').Router();
const questionController = require('../controllers/questionController');
const { authentication, authRole } = require('../middlewares/authenticationMiddleware');

questionApi.get('/get-by-id/:questionId',questionController.getById);
questionApi.get('/get-by-quizId/:quizId',questionController.getByListenId);
questionApi.post('/post/:quizId', questionController.postQuestion);
questionApi.put('/put/:questionId', questionController.putQuestion);
questionApi.delete('/delete-by-id/:id', questionController.deleteByListenId);
questionApi.delete('/delete-by-quizid/:quizId', questionController.deleteById);

module.exports = questionApi;
