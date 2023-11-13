const shoppingCart = {
    items: [],
    total: 0,
  };
  
  function addToCart(productName, productPrice) {
    shoppingCart.items.push({
      name: productName,
      price: productPrice,
    });
  
    updateCartModal();
  
    //alert('Producto agregado al carrito');
  }
  
  function updateCartModal() {
    const cartTableBody = document.getElementById('cartTableBody');
    const totalPrice = document.getElementById('totalPrice');
  
    cartTableBody.innerHTML = '';
  
    shoppingCart.items.forEach((product, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td></td>
        <td>${product.name}</td>
        <td>${product.price}$</td>
        <td class="qty"><input type="text" class="form-control" id="input${index}" value="1"></td>
        <td>${product.price}$</td>
        <td>
          <a href="#" class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">
            <i class="fa fa-times"></i>
          </a>
        </td>
      `;
      cartTableBody.appendChild(row);
    });
  
    shoppingCart.total = shoppingCart.items.reduce((total, product) => total + product.price, 0);
    totalPrice.textContent = shoppingCart.total + '$';
  }
  
  function removeFromCart(index) {
    shoppingCart.items.splice(index, 1);
  
    updateCartModal();
  
    calculateTotal();
  }