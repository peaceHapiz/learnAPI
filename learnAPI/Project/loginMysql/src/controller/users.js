

const UsersModel = require('../models/users')


// mendapat semua user yang terdapat di database
const getAllUsers = async (req,res) => {
    try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
        message : 'GET all user succes',
        data : data
    })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

// membuat user baru di data base
const createNewUser =  async (req,res) => {
    const {body} = req
    
    try {
        await UsersModel.createNewUser(body)
        res.json({
            message : "POST users succes",
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

// mengupdate user sesuai id
const updatedUser = async (req, res) => {
    const {id} = req.params
    const {body} = req
    
    try {
        await UsersModel.updatedUser(body,id)
        res.json({
            message : "POST users succes",
            data : {
                id : id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
}

// menghapus user dari database
const deletedUser = async (req,res) => {
    const {id} = req.params
    try {
        await UsersModel.deletedUser(id)
        res.json({
            message : 'DELETE user succes',
            // data : null
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updatedUser,
    deletedUser
}