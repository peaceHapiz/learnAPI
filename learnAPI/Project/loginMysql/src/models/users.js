const dbPool = require('../config/database')


const getAllUsers = () => {
    // SQL query untuk mendapat data
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    // SQL query untuk menguploud data
    const SQLQuery =   `Insert INTO users (nama, kelas) 
                        VALUES ('${body.nama}', '${body.kelas}')`

    return dbPool.execute(SQLQuery);
}

const updatedUser = (body,id) => {
    // SQL query untuk mengupdate data
    const SQLQuery = `  UPDATE users 
                        SET nama = '${body.nama}', kelas = '${body.kelas}' 
                        WHERE id = ${id}`

    return dbPool.execute(SQLQuery);
}

const deletedUser = (id) => {
    // SQL query untuk menghapus data
    const SQLQuery = `DELETE FROM users WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updatedUser,
    deletedUser,
}