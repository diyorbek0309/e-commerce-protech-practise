let dropdowns = document.getElementsByClassName("hidden_dropdown");
let count = document.getElementsByClassName("count");
let products = document.getElementsByClassName("table_bottom");
let cart_empty = document.getElementsByClassName("cart_empty")[0];
let cart = document.getElementsByClassName("cart")[0];
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
    document.getElementsByClassName("table")[0].remove();
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

let car = document.getElementById("caruselcha");
let xd = "";
function addTodo() {
  console.log("1");
  let div = document.createElement("div");
  div.className = "corusel";
  for (let i = 1; i <= 40; i++) {
    xd += `<div class="brand"><img src="./assets/images/clarins-vector-logo 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/nike_PNG12 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/zara-logo-1 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/penti-vector-logo-400x400 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/Без названия 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/nike_PNG12 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/zara-logo-1 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/nike_PNG12 1.svg" alt=""></div>
        <div class="brand"><img src="./assets/images/zara-logo-1 1.svg" alt=""></div>
        `;
  }
  div.innerHTML = xd;

  car.appendChild(div);
}

addTodo();

let p = -5360;

function suriw(b) {
  p += b * 190;
  car.style.left = p + "px";
}

let bgIndex = 1;

function slide(side) {
  let bgs = [
    "url(./assets/images/bg3.jpg)",
    "url(./assets/images/hero-bg.png)",
    "url(./assets/images/bg2.jpg)",
  ];

  if (side) {
    if (bgIndex < 2) bgIndex++;
    else if (bgIndex === 2) bgIndex = 0;
  } else {
    if (bgIndex > 0) bgIndex--;
    else if (bgIndex === 0) bgIndex = 2;
  }

  document.getElementsByClassName("home_header")[0].style.backgroundImage =
    bgs[bgIndex];
}
