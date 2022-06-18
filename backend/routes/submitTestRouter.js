const router = require('express').Router();
const submitTestController = require('../controllers/submitTestController');
const { authentication, authRole } = require('../middlewares/authenticationMiddleware');

router.get('/get-submitTest-by-test', authentication, submitTestController.getByTestId);
router.get('/get-submitTest-by-id/:id',authentication, submitTestController.getById);
router.post('/post-submitTest', authentication, submitTestController.postSubmitTest);
router.put('/put-submitTest', authentication, submitTestController.putSubmitTest);

module.exports = router;
