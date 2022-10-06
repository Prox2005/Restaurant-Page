"use strict";

import header from "./header";
import switchingPages from "../index";
import { Element } from "./header";
import "../style.css";

export default function loadContact() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  content.appendChild(header());
  const homeButton = document.querySelector(".nav__pages--home");
  homeButton.classList.remove("button--active");
  const menuButton = document.querySelector(".nav__pages--menu");
  menuButton.classList.remove("button--active");
  const contactButton = document.querySelector(".nav__pages--contact");
  contactButton.classList.add("button--active");

  const main = new Element("main", "main").createElement();
  const contact = new Element("section", "contact").createElement();
  const number = new Element("h2", "contact__number", "📱number placeholder").createElement();
  number.classList.add("contact__item");
  const email = new Element("h2", "contact__email", "📧 email placeholder").createElement();
  email.classList.add("contact__item");
  const message = new Element("h1", "contact__message", "Reach Us!").createElement();
  content.appendChild(main);
  main.appendChild(contact);
  contact.appendChild(number);
  contact.appendChild(email);
  contact.appendChild(message);
  switchingPages();
}
