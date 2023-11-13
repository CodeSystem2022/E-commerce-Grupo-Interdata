// login.js
var botonIniciarsesion = document.querySelector('#botonIniciarsesion');

botonIniciarsesion.addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Realiza una solicitud al servidor para iniciar sesión
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error al enviar solicitud al servidor:', error);
    });
});