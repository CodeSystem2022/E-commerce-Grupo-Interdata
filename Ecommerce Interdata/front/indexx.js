/*
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente.

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // lógica de autenticación, por ejemplo, una comprobación de credenciales en una base de datos o en tu servidor.
        // Simulamos una comprobación básica de usuario y contraseña aquí:
        if (username === 'usuario' && password === 'contraseña') {
            // Autenticación exitosa
            window.location.href = 'bienvenido.html'; // Redirige a la página de bienvenida.
        } else {
            // Autenticación fallida, muestra un mensaje de error.
            errorMessage.textContent = 'Credenciales incorrectas. Inténtalo de nuevo.';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const errorMessage = document.getElementById('error-message');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente.

        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Aquí debes agregar la lógica de registro de usuario, por ejemplo, verificar si el usuario ya existe y guardar los datos en tu base de datos.
        // Simulamos una comprobación básica y el registro de usuario aquí:
        if (newPassword === confirmPassword) {
            // Registro exitoso
            // Debes implementar la lógica real para guardar el nuevo usuario.
            // Redirige o muestra un mensaje de éxito, por ejemplo:
            errorMessage.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
        } else {
            // Contraseñas no coinciden, muestra un mensaje de error.
            errorMessage.textContent = 'Las contraseñas no coinciden. Inténtalo de nuevo.';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-list');

    // 
    // Simulamos la obtención de datos de productos aquí:
    const products = [
        { name: 'REMERAS'},
        { name: 'BUZOS'},
        { name: 'PANTALONES'},
        { name: 'TRAJES'}
        
    ];

    // Mostrar los productos en la lista
    products.forEach(function(product) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        productContainer.appendChild(listItem);
    });
});
/*
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-list');
    // Filtra y muestra los productos por categoría
    const categoryToDisplay = 'REMERAS'; // 
    const filteredProducts = products.filter(product => product.category === categoryToDisplay);

    // Mostrar los productos en la lista
    filteredProducts.forEach(function(product) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        productContainer.appendChild(listItem);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    let cart = []; // Un arreglo para almacenar los productos en el carrito.
    let total = 0; // Variable para rastrear el total de la compra.

    // Función para agregar un producto al carrito.
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        total += productPrice;
        updateCartUI();
    }

    // Función para actualizar la interfaz de usuario del carrito.
    function updateCartUI() {
        cartList.innerHTML = ''; // Borra la lista anterior de productos en el carrito.
        cart.forEach(function(product) {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            cartList.appendChild(listItem);
        });
        cartTotal.textContent = total.toFixed(2); // Actualiza el total en la interfaz.
    }
    // 
   
});
*/ 