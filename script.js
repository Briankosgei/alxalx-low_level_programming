// Initialize an empty cart and total price
let cart = [];
let totalPrice = 0;

// Function to add an item to the cart
function addToCart(itemName, itemPrice){
    cart.push({ name: itemName, price: itemPrice});
    totalPrice += itemPrice;
    displayCart();
}

// Fuction to display the cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
}

// Clear existing cart items 
cartItems.innerHTML = '';

// Populate the cart list
cart.forEach((item, index)); {
    const li = document.createElement('li');
    li.textContent = '${item.name} - ksh ${item.price}';
    cartItems.appendChild(li);
}

// Update the total price display
totalPriceElement.textContent =totalPrice;

// Event listener for checkout button
document.getElementById('checkout-button').addEventListener('click', function (){alert('Proceeding to checkout!')
    // You can redirect to a checkout page or process the order here
});

// Event listener for stripe payment button
document.getElementById('stripe-button').addEventListener('click', function (){
    alert('Stripe payment not yet intergrated!');
    // Intergrate Stripe payment gateaway logic here
});

// Event listener for paypal payment button
document.getElementById('paypal-button').addEventListener('click', function (){
    alert('Paypal payment not yet intergrated!');
    // Intergrate M-pesa payment gateaway logic here
});

// Event listener for M-pesa payment button
document.getElementById('M-pesa-button').addEventListener('click', function (){
    alert('M-pesa payment not yet intergrated!');
    // Intergrate M-pesa payment gateaway logic here
});