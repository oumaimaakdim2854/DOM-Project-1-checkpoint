// Wait for the page to load completely
window.onload = function() {
    // Get all the necessary elements from the page
    var plusButtons = document.querySelectorAll('.plus-btn');
    var minusButtons = document.querySelectorAll('.minus-btn');
    var removeButtons = document.querySelectorAll('.remove-btn');
    var likeButtons = document.querySelectorAll('.like-btn');
    var totalPriceElement = document.querySelector('.total-price');
    
    // Add click event to all plus buttons
    for (var i = 0; i < plusButtons.length; i++) {
        plusButtons[i].addEventListener('click', function() {
            // Find the quantity display element
            var quantityElement = this.parentElement.querySelector('.quantity-value');
            // Get the current quantity and increase it by 1
            var currentQuantity = parseInt(quantityElement.textContent);
            var newQuantity = currentQuantity + 1;
            // Update the quantity display
            quantityElement.textContent = newQuantity;
            // Update the total price
            updateTotalPrice();
        });
    }
    
    // Add click event to all minus buttons
    for (var i = 0; i < minusButtons.length; i++) {
        minusButtons[i].addEventListener('click', function() {
            // Find the quantity display element
            var quantityElement = this.parentElement.querySelector('.quantity-value');
            // Get the current quantity
            var currentQuantity = parseInt(quantityElement.textContent);
            // Only decrease if quantity is greater than 1
            if (currentQuantity > 1) {
                var newQuantity = currentQuantity - 1;
                // Update the quantity display
                quantityElement.textContent = newQuantity;
                // Update the total price
                updateTotalPrice();
            }
        });
    }
    
    // Add click event to all remove buttons
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function() {
            // Find the cart item to remove
            var cartItem = this.closest('.cart-item');
            // Hide the cart item
            cartItem.style.display = 'none';
            // Update the total price
            updateTotalPrice();
        });
    }
    
    // Add click event to all like buttons
    for (var i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener('click', function() {
            // Toggle the liked class
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                // Change the heart icon color back to gray
                this.querySelector('i').style.color = '#bdc3c7';
            } else {
                this.classList.add('liked');
                // Change the heart icon color to red
                this.querySelector('i').style.color = '#e74c3c';
            }
        });
    }
    
    // Function to calculate and update the total price
    function updateTotalPrice() {
        var cartItems = document.querySelectorAll('.cart-item');
        var totalPrice = 0;
        
        // Loop through each cart item
        for (var i = 0; i < cartItems.length; i++) {
            // Skip items that are hidden (removed)
            if (cartItems[i].style.display === 'none') {
                continue;
            }
            
            // Get the price and quantity for this item
            var priceElement = cartItems[i].querySelector('.price');
            var price = parseFloat(priceElement.getAttribute('data-price'));
            var quantityElement = cartItems[i].querySelector('.quantity-value');
            var quantity = parseInt(quantityElement.textContent);
            
            // Add this item's total to the cart total
            var itemTotal = price * quantity;
            totalPrice += itemTotal;
        }
        
        // Update the displayed total price (with 2 decimal places)
        totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
    }
    
    // Calculate the initial total price when the page loads
    updateTotalPrice();
};