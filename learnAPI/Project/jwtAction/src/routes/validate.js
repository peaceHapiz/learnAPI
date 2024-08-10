const express = require('express')

const router = express.Router()

const validateController = require('../controller/validate')

router.post('/', validateController.validateToken)

module.exports = router;