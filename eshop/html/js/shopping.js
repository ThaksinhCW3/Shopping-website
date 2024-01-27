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

function handleBuyNowClick() {
    alert("Item added to cart!");
}

var buyButton = document.querySelector('.buy-now');

buyButton.addEventListener('click', handleBuyNowClick);