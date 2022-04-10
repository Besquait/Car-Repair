let burger = document.querySelector(`.nav__burger`);
let nav = document.querySelector(`.menu__body`);
let navChild = document.querySelectorAll(`.header__link`);
let lng = document.querySelector(`.header__wrapper--lng`);
let lngLink = document.querySelector(`.header__wrapper--lng a`);

burger.onclick = function () {
  this.classList.toggle(`active`);
  nav.classList.toggle(`active`);
  lng.classList.toggle(`active-btn`);
  document.body.classList.toggle(`lock`);
};

navChild.forEach((e) => {
  e.addEventListener("click", smoothMenuClose);
});

function smoothMenuClose() {
  burger.classList.remove(`active`);
  nav.classList.remove(`active`);
  lng.classList.remove(`active-btn`);
  document.body.classList.remove(`lock`);
}

let header = document.querySelector(`.header`),
  headerH = document.querySelector(`.header`).clientHeight;
let headerWrapper = document.querySelector(`.header__wrapper`);

document.onscroll = () => {
  let scroll = window.scrollY;
  console.log(scroll);
  if (scroll > headerH + 10) {
    header.classList.add(`fixed`);
    headerWrapper.classList.remove(`margin-top`);
  } else {
    header.classList.remove(`fixed`);
    headerWrapper.classList.add(`margin-top`);
  }
};

