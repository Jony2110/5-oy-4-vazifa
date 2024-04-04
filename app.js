let button = document.querySelector("#btn");
let button2 = document.querySelector("#btn2");
let section = document.querySelector("#section");
let title = document.querySelector("#title");
function btnClick() {
  if (+title.textContent == 10) {
    alert("достигнут лимит нажатий");
  } else {
    title.textContent++;
  }
}
button.setAttribute("onclick", "btnClick()");

function btnClickMinus() {
  if (+title.textContent <= 1) {
    alert("не должна равняться 0");
  } else {
    title.textContent--;
  }
}
button2.setAttribute("onclick", "btnClickMinus()");
