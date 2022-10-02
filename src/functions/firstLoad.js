"use strict";
import header from "../pages/header";
import home from "../pages/home";
import "../style.css";
// this js will manage the page first load

export default function appendElements() {
  const content = document.querySelector(".content");
  const headerContent = header();
  const homeContent = home();
  content.appendChild(headerContent);
  content.appendChild(homeContent);
}
