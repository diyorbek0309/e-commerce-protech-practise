let count = document.getElementsByClassName("count");
let products = document.getElementsByClassName("table_bottom");
let cart_empty = document.getElementsByClassName("cart_empty")[0];
let table_top = document.getElementsByClassName("table_top")[0];
let btn_div = document.getElementsByClassName("btn_div")[0];
let counter = 0;

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
