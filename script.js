//the total amount to be shown in the form of numbers without tax 
let cartCount = 0;
let cartItems = []; // Track items with details (name, price, quantity)
let subTotal = 0;
let taxRate = 0.15;
let total = 0;

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    cartCount++;
    cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    document.getElementById('cartCount').textContent = cartCount;
    updateTotal();
    updateCartItems();
}

// Function to update cart items
function updateCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = ''; // Clear previous list
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(cartItemDiv);
    });
}

// Function to view cart
function viewCart() {
    alert('You have ' + cartCount + ' items in your cart');
}

// Function to redirect to billing page
function redirectToBilling() {
    const orderNumber = generateOrderNumber();
    // Simulating redirection by creating a dynamic billing interface
    document.body.innerHTML = `
        <div class="container mt-4">
            <h2 class="text-center">Billing Page</h2>
            <p>Sub Total: ₹${subTotal.toFixed(2)}</p>
            <p>Tax (${taxRate*100}%): ₹${(subTotal * taxRate).toFixed(2)}</p>
            <p>Total Amount: ₹${total.toFixed(2)}</p>
            <p>Order Number: ${orderNumber}</p>
            <label for="paymentMethod">Select Payment Method:</label>
            <select id="paymentMethod" class="form-select mb-3">
                <option value="" disabled selected>Select</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
            </select>
            <button class="btn btn-primary" id="proceedPayment">Proceed to Payment</button>
            <button class="btn btn-primary" onclick="backToMenu()">Back to Menu</button>
        </div>
    `;
    // Add event listener to the Proceed button
    document.getElementById("proceedPayment").addEventListener("click", handlePaymentConfirmation);
}

// Function to generate order number
function generateOrderNumber() {
    return 'ORD' + Math.floor(Math.random() * 10000);
}

// Function to update total
function updateTotal() {
    subTotal = 0;
    cartItems.forEach(item => subTotal += item.price);
    total = subTotal + (subTotal * taxRate);
}

// Function to handle payment confirmation
function handlePaymentConfirmation() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    if (!paymentMethod) {
        alert("Please select a payment method!");
        return;
    }

    // Display confirmation and preparation time
    displayPreparationTime(paymentMethod);
}

// Function to display preparation time
function displayPreparationTime(paymentMethod) {
    document.body.innerHTML = `
        <div class="container mt-4 text-center">
            <h3>Payment Successful!</h3>
            <p>Your order will be ready in 20 minutes. Payment Method: ${paymentMethod}</p>
            <p>Thank you for your order!</p>
        </div>
    `;
}

// Function to go back to menu
function backToMenu() {
    window.location.href = 'canteen.html'; // Redirect back to menu page
}

// Simplified checkout event listener
document.querySelector(".btn-success").addEventListener("click", redirectToBilling);