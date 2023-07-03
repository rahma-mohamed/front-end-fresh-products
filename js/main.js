let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shppingCart.classList.remove('active');
}

let shppingCart = document.querySelector('.shpping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    shppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll =() => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}


    var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:7500,
        disableOnInteraction: false
      },
      centeredSlides:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          
        },
        1020: {
          slidesPerView: 3,
          
        },
      },
    });
    var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:7500,
        disableOnInteraction: false
      },
      centeredSlides:true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          
        },
        1020: {
          slidesPerView: 3,
          
        },
      },
    });    


// function add to cart
function addToCart() {
  // Get all the "add to cart" buttons
  const addToCartButtons = document.querySelectorAll('.btn');

  // Add a click event listener to each button
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link

      // Get the parent box element
      const box = button.parentNode;

      // Get the product details
      const image = box.querySelector('img').src;
      const title = box.querySelector('h3').textContent;
      const price = box.querySelector('.price').textContent;

      // Create a new cart item element
      const cartItem = document.createElement('div');
      cartItem.classList.add('box');

      // Create the cart item HTML structure
      cartItem.innerHTML = `
        <i class="fas fa-trash"></i>
        <img src="${image}" alt="">
        <div class="contaner">
          <h3>${title}</h3>
          <span class="price">${price}</span>
          <span class="quantity">qty : 1</span>
        </div>
      `;

      // Get the shopping cart element
      const shoppingCart = document.querySelector('.shpping-cart');

      // Append the cart item to the shopping cart
      shoppingCart.appendChild(cartItem);

      // Update the total price
      updateTotalPrice(price);
    });
  });
}

// Update the total price
function updateTotalPrice(price) {
  const totalPriceElement = document.querySelector('.total');

  // Get the current total price value
  let totalPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));

  // Get the price of the newly added item
  const itemPrice = parseFloat(price.replace('$', ''));

  // Add the item price to the total price
  totalPrice += itemPrice;

  // Update the total price element
  totalPriceElement.textContent = `total : $${totalPrice.toFixed(2)}/-`;
}

// Call the addToCart function to enable the "add to cart" functionality
addToCart();



// function removeFromCart
// Get the cart element
const cart = document.querySelector('.shpping-cart');

// Attach event listeners to all the trash icons in the cart
const trashIcons = cart.querySelectorAll('.fas.fa-trash');
trashIcons.forEach(icon => {
  icon.addEventListener('click', removeFromCart);
});

// Function to remove an item from the cart
function removeFromCart(event) {
  const itemBox = event.target.closest('.box');
  itemBox.remove();
}

function removeFromCart() {
  const trashIcons = document.querySelectorAll('.box .fas.fa-trash');
  trashIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const itemBox = icon.parentNode;
      itemBox.remove();
      updateTotalPrice(-getItemPrice(itemBox));
    });
  });
}

// Get the price of an item from the cart item element
function getItemPrice(itemBox) {
  const priceElement = itemBox.querySelector('.price');
  const priceText = priceElement.textContent;
  const price = parseFloat(priceText.replace('$', ''));
  return price;
}

// Update the total price
function updateTotalPrice(priceDifference) {
  const totalPriceElement = document.querySelector('.total');
  let totalPrice = parseFloat(totalPriceElement.textContent.replace('total : $', ''));
  totalPrice += priceDifference;
  totalPriceElement.textContent = `total : $${totalPrice.toFixed(2)}/-`;
}

// Call the removeFromCart function to enable the "remove from cart" functionality
removeFromCart();
