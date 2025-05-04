window.onload = function () {
    const plusButtons = document.querySelectorAll('.plus-btn');
    const minusButtons = document.querySelectorAll('.minus-btn');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    const totalPriceElement = document.querySelector('.total-price');
  
    plusButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const quantityElement = this.parentElement.querySelector('.quantity-value');
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotalPrice();
      });
    });
  
    minusButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const quantityElement = this.parentElement.querySelector('.quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantityElement.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    removeButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const cartItem = this.closest('.cart-item');
        cartItem.remove();
        updateTotalPrice();
      });
    });
  
    likeButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        this.classList.toggle('liked');
        const icon = this.querySelector('i');
        icon.style.color = this.classList.contains('liked') ? '#e74c3c' : '#bdc3c7';
      });
    });
  
    function updateTotalPrice() {
      const cartItems = document.querySelectorAll('.cart-item');
      let total = 0;
  
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity-value').textContent);
        total += price * quantity;
      });
  
      totalPriceElement.textContent = '$' + total.toFixed(2);
    }
  
    updateTotalPrice();
  };
  