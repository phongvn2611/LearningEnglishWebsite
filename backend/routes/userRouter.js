const router = require('express').Router();
const userController = require('../controllers/userController');
const { authentication } = require('../middlewares/authMiddleware');

router.post('/register', userController.register);
router.post('/activation', userController.activateEmail);
router.post('/login', userController.login);
router.post('/refresh-token', userController.getAccessToken);
router.post('/forgot-password', userController.forgotPassword);
router.get('/get-profile', authentication, userController.getProfile);
module.exports = router;
