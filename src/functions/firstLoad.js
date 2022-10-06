"use strict";
import header from "../pages/header";
import homeContent from "../pages/home";
import "../style.css";
import switchingPages from "../index";

// this js will manage the page first load

export default function appendElements() {
  const content = document.querySelector(".content");
  const headerContent = header();
  const home = homeContent();
  content.appendChild(headerContent);
  content.appendChild(home);
  switchingPages();
}
