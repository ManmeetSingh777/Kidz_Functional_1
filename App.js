let cartItems = {};

function addToCart(itemName) {
    if (cartItems[itemName]) {
        cartItems[itemName]++;
    } else {
        cartItems[itemName] = 1;
    }
    updateCartValue();
}

function updateCartValue() {
    let totalQuantity = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    document.getElementById("cart-value").innerText = totalQuantity;
}

const addButtons = document.querySelectorAll(".button");
addButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemName = this.parentNode.parentNode.querySelector("h3").innerText;
        addToCart(itemName);
    });
});

function displayCartItems() {
    console.log("Item name:");
    for (const itemName in cartItems) {
        if (cartItems.hasOwnProperty(itemName)) {
            const quantity = cartItems[itemName];
            console.log(itemName + " — Quantity: " + quantity);
        }
    }
    let totalAmount = 0;
    for (const itemName in cartItems) {
        if (cartItems.hasOwnProperty(itemName)) {
            const quantity = cartItems[itemName];
            totalAmount += quantity * 10;
        }
    }
    console.log("The total amount is " + totalAmount.toFixed(2) + "$");
}

document.getElementById("cart").addEventListener("click", function() {
    displayCartItems();
});
