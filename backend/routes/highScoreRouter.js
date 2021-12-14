const highScoreApi = require('express').Router();
const highScoreController = require('../controllers/highScoreController');

highScoreApi.put('/update', highScoreController.putUpdateHighScore);

highScoreApi.get('/leaderboard', highScoreController.getLeaderboard);

module.exports = highScoreApi;
