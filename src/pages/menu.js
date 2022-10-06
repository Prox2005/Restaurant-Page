"use strict";
import loadHeader from "./header";
import { Element } from "./header";
import "../style.css";
import switchingPages from "../index";

export default function loadMenu() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  const header = loadHeader();
  content.appendChild(header);
  const home = document.querySelector(".nav__pages--home");
  const menuButton = document.querySelector(".nav__pages--menu");
  const contact = document.querySelector(".nav__pages--contact");
  contact.classList.remove("button--active");
  home.classList.remove("button--active");
  menuButton.classList.add("button--active");

  const main = new Element("main", "main").createElement();
  const menu = new Element("section", "menu").createElement();

  content.appendChild(main);
  main.appendChild(menu);

  for (let i = 1; i < 5; i++) {
    const menuItem = new Element("div", `menu__item--${i}`).createElement();
    menuItem.classList.add("menu__item");
    const dish = new Element("h2", `menu__dish--${i}`, `Dish ${i}`).createElement();
    dish.classList.add("menu__dish");
    const description = new Element(
      "p",
      `menu__description--${i}`,
      "this is a description"
    ).createElement();
    description.classList.add("menu__description");
    menu.appendChild(menuItem);
    menuItem.appendChild(dish);
    menuItem.appendChild(description);
  }
  switchingPages();
}
