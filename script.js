// script.js

// Simulate fetching data from an API
const apiData = [
  {
    "original_total_price": 250000,
    "items": [
        {
            "id": 49839206859071,
            "quantity": 1,
            "variant_id": 49839206859071,
            "key": "49839206859071:e32e24073a153fb68fbc44cd5cd43e05",
            "title": "Asgaard sofa",
            "price": 25000000,
            "original_price": 25000000,
            "presentment_price": 250000,
            "discounted_price": 20000000,
            "line_price": 20000000,
            "original_line_price": 25000000,
            "total_discount": 5000000,
            "sku": "",
            "grams": 0,
            "vendor": "Lnd [ RISHABH ] ",
            "taxable": true,
            "product_id": 9740132319551,
            "product_has_only_default_variant": true,
            "gift_card": false,
            "final_price": 25000000,
            "final_line_price": 25000000,
            "url": "/products/asgaard-sofa?variant=49839206859071",
            "featured_image": {
                "aspect_ratio": 1.23,
                "alt": "Asgaard sofa",
                "height": 391,
                "url": "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
                "width": 481
            },
            "image": "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
            "handle": "asgaard-sofa",
            "requires_shipping": true,
            "product_type": "",
            "product_title": "Asgaard sofa",
            "product_description": "The Asgaard sofa offers unparalleled comfort and style with its sleek design and high-quality materials. With its expert craftsmanship and attention to detail, this sofa is perfect for anyone looking to elevate their living space. Enjoy a luxurious and relaxing experience with the Asgaard sofa.",
            "variant_title": null,
            "variant_options": [
                "Default Title"
            ],
            "options_with_values": [
                {
                    "name": "Title",
                    "value": "Default Title"
                }
            ],
            "line_level_discount_allocations": [],
            "line_level_total_discount": 0,
            "quantity_rule": {
                "min": 1,
                "max": null,
                "increment": 1
            },
            "has_components": false
        }
    ],
    "requires_shipping": true,
    "currency": "INR",
    "items_subtotal_price": 25000000
}  ];
  
  // DOM Elements
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalElement = document.getElementById('cart-total');
  
  // Load cart items
  function loadCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear the cart first
    let total = 0;
  
    apiData.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">

        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.title}</h3>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        </div>

        <div class="cart-item-quantity">
          <button class="quantity-decrease" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-increase" data-id="${item.id}">+</button>
        </div>
      `;
  
      cartItemsContainer.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  
    cartTotalElement.innerText = total.toFixed(2);
  
    // Add event listeners for quantity buttons
    document.querySelectorAll('.quantity-increase').forEach(button => {
      button.addEventListener('click', () => updateQuantity(button.dataset.id, 1));
    });
  
    document.querySelectorAll('.quantity-decrease').forEach(button => {
      button.addEventListener('click', () => updateQuantity(button.dataset.id, -1));
    });
  }
  
  // Update item quantity
  function updateQuantity(itemId, change) {
    const item = apiData.find(i => i.id == itemId);
    if (item) {
      item.quantity += change;
      if (item.quantity < 1) item.quantity = 1; // Ensure quantity can't be less than 1
      loadCartItems(); // Re-load the cart after updating the quantity
    }
  }
  // Initial cart load
  window.onload = loadCartItems;
  