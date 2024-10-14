// scripts.js

document.querySelectorAll('.thumbnail-container img').forEach(img => {
    img.addEventListener('click', function() {
      document.querySelector('.main-image').src = this.src.replace('_thumb', '');
    });
  });

  
  // Initialize an empty cart
let cart = [];

// Add event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-name');
    const productPrice = parseFloat(this.getAttribute('data-price'));

    // Add product to cart array
    cart.push({ name: productName, price: productPrice });

    // Update cart UI
    updateCart();
  });
});

// Function to update cart items and total
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const cartCountElement = document.getElementById('cart-count');

  // Clear current cart items list
  cartItemsContainer.innerHTML = '';

  let total = 0;

  // Loop through cart items and add them to the cart display
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  // Update cart total and item count
  cartTotalElement.textContent = total.toFixed(2);
  cartCountElement.textContent = `(${cart.length})`;
}
