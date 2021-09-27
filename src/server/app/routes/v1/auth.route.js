const Router = require('express').Router

const authController = require('../../controllers/auth.controller')

const router = Router()

router.post('/hello', authController.hello)
module.exports = router
