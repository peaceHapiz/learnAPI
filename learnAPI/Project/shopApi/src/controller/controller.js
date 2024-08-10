const shopModel = require('../model/Model')


//mendapatkan semua data di database menu
const getAllMenu = async (req,res) => {
    try {
    const [data] = await shopModel.getAllMenu();

    res.json({
        message : 'GET all Menu succes',
        data : data
    })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
}

//membuat menu baru
const createNewMenu =  async (req,res) => {
    const {body} = req
    
    try {
        await shopModel.createNewMenu(body)
        res.json({
            message : "POST Menu succes",
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

// menghapus menu
const deletedMenu = async (req,res) => {
    const {idmenu} = req.params
    try {
        await shopModel.deletedMenu(idmenu) 
        res.json({
            message : 'DELETE Menu succces',
            
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
}

// menaruh order ke database order
const placeOrder =  async (req,res) => {
    const {body} = req
    
    try {
        await shopModel.placeOrder(body)
        res.json({
            message : "PLACE Order success",
            data : body
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error
        })
    }
    
}

// export semua fungsi
module.exports = {
    getAllMenu,
    createNewMenu,
    deletedMenu,
    placeOrder

}