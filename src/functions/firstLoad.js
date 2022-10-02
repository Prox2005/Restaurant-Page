"use strict";
import header from "../pages/header";
import home from "../pages/home";
import "../style.css";
// this js will manage the page first load

export default function appendElements() {
  const content = document.querySelector(".content");
  const headerContent = header();
  content.appendChild(headerContent);
  const homeButton = document.querySelector(".nav__pages--home");
  homeButton.addEventListener("click", home);
}
