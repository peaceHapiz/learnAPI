const express = require('express')

const router = express.Router()

const generateController = require('../controller/generate')

router.post('/', generateController.generateToken)

module.exports = router;
