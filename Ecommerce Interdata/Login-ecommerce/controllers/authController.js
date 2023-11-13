// authController.js
const pool = require('../config/dbConnect');

// Controlador de registro
const registerUser = (req, res) => {
    const { nombre, email, contrasena } = req.body;

    console.log('Datos recibidos para registro:', nombre, email, contrasena);

    const query = "INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)";

    pool.query(query, [nombre, email, contrasena], (error, results) => {
        if (error) {
            console.error("Error en el registro:", error);
            return res.status(500).send("Error en el registro");
        }

        console.log("Usuario registrado correctamente");
        return res.status(200).send("Usuario registrado correctamente");
    });
};

// Controlador de inicio de sesión
const loginUser = (req, res) => {
    const { email, contrasena } = req.body;

    console.log('Datos recibidos para inicio de sesión:', email, contrasena);

    const query = 'SELECT email, contrasena FROM usuarios WHERE email = ? AND contrasena = ?';

    pool.query(query, [email, contrasena], (error, results) => {
        if (error) {
            console.error('Error en el inicio de sesión:', error.message);
            return res.status(500).json({ success: false, message: 'Error en el inicio de sesión: ' + error.message });
        }

        console.log('Resultados de la consulta:', results);

        if (results.length > 0) {
            console.log('Inicio de sesión exitoso:', results);
            return res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            console.log('Credenciales incorrectas');
            return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
    });
};

module.exports = { registerUser, loginUser };
