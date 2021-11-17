const router = require('express').Router();
const userController = require('../controllers/userController');
const { authentication } = require('../middlewares/authenticationMiddleware');

router.post('/register', userController.register);
router.post('/activation', userController.activateEmail);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/refresh-token', userController.getAccessToken);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
router.get('/get-user-info', authentication, userController.getUserInfo);
module.exports = router;
