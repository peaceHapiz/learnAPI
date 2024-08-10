const express = require('express')

const router = express.Router()

const orderController = require('../controller/controller')

router.post('/',orderController.placeOrder)

module.exports = router;