let total = 0;

// Function to add item to order
function addToOrder(price) {
    total += price;
    document.getElementById('total').innerText = total;
}

// Function to simulate payment process
function pay(method) {
    if (total > 0) {
        alert(`You have successfully paid $${total} using ${method}. Thank you for your order!`);
        total = 0;
        document.getElementById('total').innerText = total; // Reset total
    } else {
        alert('Please add items to your order before proceeding to payment.');
    }
}
