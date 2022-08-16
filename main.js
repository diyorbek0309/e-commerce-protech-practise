let count = document.getElementsByClassName("count");

function decrement(index) {
  if (count[index].innerHTML > 1) {
    count[index].innerHTML = parseInt(count[index].innerHTML) - 1;
  }
}

function increment(index) {
  count[index].innerHTML = parseInt(count[index].innerHTML) + 1;
}
