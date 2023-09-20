"use strict";

const menuHamburger = document.querySelector(".menu-hamburger");
const menuClose = document.querySelector(".menu-close");

function toggleIconMenu() {
	menuClose.classList.toggle("hidden");
	menuHamburger.classList.toggle("hidden");
}

menuHamburger.addEventListener("click", toggleIconMenu);
menuClose.addEventListener("click", toggleIconMenu);
