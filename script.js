// Initialize an empty cart and total price
let cart = [];
let totalprice = 0 ;
let cartitems = document.getElementById('cartitems');

// Function to add an item to the cart
function addtocart(itemname, itemprice){
    cart.push({ name: itemname, price: itemprice});
    totalprice += itemprice; displaycart();
}

// // Function to display the cart items
// function displaycart(){
//     const cartitems = document.getElementById('cart-items');
//     const totalpriceElement = document.getElementById('total-price');
// }

// // Clear existing cart items
// cartitems.innerHTML = '';

// Populate the cart list
cart.forEach((item, index) =>
{
    const li = document.createElement('li');
    li.textContent = '${item-name} - ${item.price}';
    cartitems.appendChild(li);

});

// Update total price display
// totalpriceElement.textContent = totalprice;

// Event listener for checkout button
document.getElementById('checkout').addEventListener('click', function(){
    alert('Proceeding to checkout!');
7
// You can redirect to a checkout page or process the order here    
});

//Event listener for M-pesa payment button
document.getElementById('Stripe-button').addEventListener('click', function(){
    alert('M-pesa payment not yet intergrated!');

//Intergrate Mpesa payment gateway logic here    
});

//Event Listener for paypal payment button
document.getElementById('paypal-button').addEventListener('click', function(){
    alert('Paypal payment not yet intergrated!');

// Intergrate paypal payment logic here    
});
