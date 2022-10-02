// this js will manage the home page
"use strict";

import { Element } from "./header";
import "../style.css";
export default function homeContent() {
  const content = document.querySelector(".content");
  const main = new Element("main", "main").createElement();
  const home = new Element("section", "home").createElement();
  const headline = new Element(
    "h1",
    "home__headline",
    "Nothing brings people together like good food"
  ).createElement();
  const visitUs = new Element("h2", "home__visit-us", "Visit us Soon!").createElement();

  const img = new Element("img", "home__restaurant-pic").createElement();
  img.src = "../../src/assets/restaurant.jpg";

  content.appendChild(main);
  main.appendChild(home);
  home.appendChild(headline);
  home.appendChild(visitUs);
  home.appendChild(img);
  return main;
}
