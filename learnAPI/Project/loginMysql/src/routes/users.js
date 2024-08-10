const express = require('express')

const router = express.Router()

const userController = require('../controller/users')

//menambahkan data siswa
router.post('/',userController.createNewUser)

//memnampilkan data absensi siswa
router.get('/',userController.getAllUsers)

//mengupdate data siswa
router.patch('/:id',userController.updatedUser)

//menghapus data
router.delete('/:id', userController.deletedUser);




module.exports = router;