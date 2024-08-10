const dbPoolMenu = require('../config/menuDB')

const dbPoolOrder = require('../config/orderDB')

//mendapatkan semua menu
const getAllMenu = () => {
    const SQLQuery = 'SELECT * FROM menu;';
    return dbPoolMenu.execute(SQLQuery);
}

// membuat menu
const createNewMenu = (body) => {
    const SQLQuery =   `Insert INTO menu (Makanan, Harga) 
                        VALUES ('${body.makanan}', '${body.harga}')`

    return dbPoolMenu.execute(SQLQuery);
}

// menghapus menu
const deletedMenu = (idmenu) => {
    const SQLQuery = `DELETE FROM menu WHERE idmenu = ${idmenu};`

    return dbPoolMenu.execute(SQLQuery)
}

// membuat order baru ke database order
const placeOrder = (body) => {
    const SQLQuery = `Insert INTO menu_api.order (Idmenu, Jumlah) 
                      VALUES ('${body.idmenu}', '${body.jumlah}')`

    return dbPoolOrder.execute(SQLQuery)
}




module.exports = {
    getAllMenu,
    createNewMenu,
    deletedMenu,
    placeOrder
}