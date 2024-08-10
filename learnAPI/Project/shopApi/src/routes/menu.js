const express = require('express')

const router = express.Router()

const menuController = require('../controller/controller')


router.get('/', menuController.getAllMenu)

router.post('/',menuController.createNewMenu)

router.delete('/:idmenu',menuController.deletedMenu)

module.exports = router;