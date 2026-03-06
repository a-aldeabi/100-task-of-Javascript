// Task04: simple counter with Up and Down buttons

let counterPrint = document.getElementById("counter");
let counter = 0;
counterPrint.innerHTML = counter;

let btnUp = document.querySelector(".btn-up");
let btnDown = document.querySelector(".btn-down");

btnUp.addEventListener("click", goUP);
btnDown.addEventListener("click", goDown);

function goUP() {
  counter++;
  counterPrint.innerHTML = counter;
}

function goDown() {
  if (counter > 0) {
    counter--;
    counterPrint.innerHTML = counter;
  }
}
