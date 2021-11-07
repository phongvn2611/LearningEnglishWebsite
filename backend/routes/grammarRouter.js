const router = require('express').Router();
const grammarController = require('../controllers/grammarController');
const { authentication, authRole } = require('../middlewares/authMiddleware');

router.get('/get-grammar-by-id/:id', authentication, grammarController.getById);
router.get('/get-grammar-by-listenid/:listenId', authentication, grammarController.getByListeningId);
router.post('/post-grammar-by-listen/:listenId', authentication, authRole, grammarController.postGrammarByListen);
router.post('/post-grammar', authentication, authRole, grammarController.postGrammar);
router.put('/put-grammar/:grammarId', authentication, authRole, grammarController.putGrammar);
router.delete('/delete-grammar-by-id/:id', authentication, authRole, grammarController.deleteById);
router.delete('/delete-grammar-by-listenid/:listenId', authentication, authRole, grammarController.deleteByListenId);

module.exports = router;
