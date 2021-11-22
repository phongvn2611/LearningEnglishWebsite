const router = require('express').Router();
const userController = require('../controllers/userController');
const { authentication } = require('../middlewares/authenticationMiddleware');
const { uploadImage } = require('../middlewares/uploadImageMiddleware');

router.post('/register', userController.register);
router.post('/activation', userController.activateEmail);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/refresh-token', userController.getAccessToken);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
router.get('/get-user-info', authentication, userController.getUserInfo);
router.post('/update-profile', authentication, userController.updateProfile);
router.post('/update-avatar', authentication, uploadImage, userController.updateAvatar);
router.post('/update-password', authentication, userController.updatePassword);
module.exports = router;
