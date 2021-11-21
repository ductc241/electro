const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

const { userAuth, roleAuth } = require('../middlewares/auth.mdw')

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)

router.get('/infor', userAuth, roleAuth(['admin', 'superadmin']), authController.getUser)

module.exports = router;