const router = require('express').Router();
const grammarController = require('../controllers/grammarController');
const { authentication, authRole } = require('../middlewares/authMiddleware');

router.get('/get-grammar-by-id/:id', grammarController.getById);
router.get('/get-grammar-by-listenid/:listenId', grammarController.getByListeningId);
router.post('/post-grammar-by-listen/:listenId', grammarController.postGrammarByListen);
router.post('/post-grammar', grammarController.postGrammar);
router.put('/put-grammar/:grammarId', grammarController.putGrammar);
router.delete('/delete-grammar-by-id/:id', grammarController.deleteById);
router.delete('/delete-grammar-by-listenid/:listenId', grammarController.deleteByListenId);

module.exports = router;
