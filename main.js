let dropdowns = document.getElementsByClassName("hidden_dropdown");
let count = document.getElementsByClassName("count");
let products = document.getElementsByClassName("table_bottom");
let cart_empty = document.getElementsByClassName("cart_empty")[0];
let cart = document.getElementsByClassName("cart")[0];
let table_top = document.getElementsByClassName("table_top")[0];
let btn_div = document.getElementsByClassName("btn_div")[0];
let arrows = document.querySelectorAll(".main_catalog .dropdown img");

let saver = false,
  counter = 0;

function decrement(index) {
  if (count[index].innerHTML > 1)
    count[index].innerHTML = parseInt(count[index].innerHTML) - 1;
}

function increment(index) {
  count[index].innerHTML = parseInt(count[index].innerHTML) + 1;
}

function removeProduct(index) {
  counter++;
  if (products.length === counter) {
    cart_empty.style.display = "block";
    table_top.style.display = "none";
    btn_div.style.display = "none";
  }
  products[index].style.display = "none";
}

function showCart() {
  cart.style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementsByClassName("bg")[0].style.display = "block";
}

function hideCart() {
  cart.style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementsByClassName("bg")[0].style.display = "none";
}

function toggleDropdown(index) {
  if (saver) {
    dropdowns[index].style.display = "none";
    arrows[index].style.transform = "rotate(0deg)";
    saver = false;
  } else {
    saver = true;
    dropdowns[index].style.display = "block";
    arrows[index].style.transform = "rotate(90deg)";
  }
}
