// register.js
var botonRegistrarse = document.querySelector('#botonRegistrarse');

botonRegistrarse.addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Realiza una solicitud al servidor para registrar al usuario
    fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: nombre, email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error al enviar solicitud al servidor:', error);
    });
});
