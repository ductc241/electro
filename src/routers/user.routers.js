const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');
const { userAuth, roleAuth } = require('../middlewares/auth.mdw')

router.get('/', userAuth, roleAuth(['admin']), userController.getAll)

module.exports = router
