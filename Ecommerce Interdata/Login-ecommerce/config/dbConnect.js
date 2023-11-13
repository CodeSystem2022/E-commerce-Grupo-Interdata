const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root1234',
    database: process.env.DB_NAME || 'dbtienda',
});

pool.getConnection((error, connection) => {
    if (error) {
        console.error("Error en la conexión a la base de datos:", error.message);
    } else {
        console.log("Conexión exitosa a la base de datos");
        connection.release();
    }
});

module.exports = pool;