"use strict";

const menuHamburger = document.querySelector(".menu-hamburger");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector("nav");

function toggleIconMenu() {
	menuClose.classList.toggle("hidden");
	menuHamburger.classList.toggle("hidden");
	nav.classList.toggle("mobile-nav");
}

menuHamburger.addEventListener("click", toggleIconMenu);
menuClose.addEventListener("click", toggleIconMenu);

const menuLinks = document.querySelectorAll("nav ul li a");

function hideMenu() {
	nav.classList.remove("mobile-nav");
	menuClose.classList.add("hidden");
	menuHamburger.classList.remove("hidden");
}

menuLinks.forEach((link) => {
	link.addEventListener("click", hideMenu);
});
