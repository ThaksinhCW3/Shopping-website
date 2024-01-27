// Sidebar function
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

// Cart function
// Retrieve the stored cart items from localStorage
let storedCart = JSON.parse(localStorage.getItem('cart')) || [];

// Add the selected item to the cart and storage when "Buy Now" is clicked
document.getElementById("buy-button-1").addEventListener("click", () => {
    const selectedItem = product[0]; // Assuming product[0] is the selected item
    addtocart(selectedItem);
    storeCart();
});

// Function to add item to cart
function addtocart(item) {
    const existingIndex = storedCart.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingIndex !== -1) {
        storedCart[existingIndex].quantity++;
    } else {
        storedCart.push({ ...item, quantity: 1 });
    }

    displaycart();
}

// Function to store the cart in localStorage
function storeCart() {
    localStorage.setItem('cart', JSON.stringify(storedCart));
}

let cart = [];

function addtocart(a) {
  const existingIndex = cart.findIndex(item => item.id === product[a].id);
  
  if (existingIndex !== -1) {
    // If the product exists, increase its quantity
    cart[existingIndex].quantity++;
  } else {
    // If the product doesn't exist, add it to the cart with quantity 1
    cart.push({ ...product[a], quantity: 1 });
  }

  displaycart();
}

function delElement(a) {
  // Decrease the quantity of the product at index 'a'
  cart[a].quantity--;

  // If quantity becomes zero, remove the item from the cart
  if (cart[a].quantity === 0) {
    cart.splice(a, 1);
  }

  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartitem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartitem").innerHTML = cart.map((item, index) => {
      var { image, title, price, quantity } = item;
      total += price * quantity;
      document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
      return (
        `<div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src=${image}>
          </div>
          <div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}.00 x ${quantity}</h2>
          </div>
          <i class='fa fa-trash' onclick='delElement(${index})'></i>
        </div>`
      );
    }).join('');
  }
}
