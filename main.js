import './style.scss'

document.addEventListener("DOMContentLoaded", init);

let logo;
let text;
let arrow;

function init() {
  logo = document.querySelector(".st1");
  text = document.querySelector("#logo_txt");


  logo.addEventListener("mouseover", over);
  logo.addEventListener("mouseout", out)
  text.addEventListener("mouseover", over);
  text.addEventListener("mouseout", out)

}

function over(event) {
  logo.classList.add("over-logo");
  text.classList.add("over-logo");

}

function out(event) {
    logo.classList.remove('over-logo');
    text.classList.remove('over-logo');

}



