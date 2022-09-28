const express = require('express');
const authenticate = require('../middlewares/authenticate');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/getMe', authenticate, authController.getMe);

module.exports = router;
