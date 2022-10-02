"use strict";
import "../../src//style.css";

export default function headerContent() {
  const header = new Element("header", "header").createElement();
  const h2 = new Element("h2", "header__restaurant-name", "Natus Restaurant").createElement();

  const nav = new Element("nav", "nav").createElement();
  const homeButton = new Element("button", "nav__pages--home", "Home").createElement();
  homeButton.classList.add("button");
  homeButton.classList.add("button--active");

  const menuButton = new Element("button", "nav__pages--menu", "Menu").createElement();
  menuButton.classList.add("button");

  const contactButton = new Element("button", "nav__pages--contact", "Contact").createElement();
  contactButton.classList.add("button");

  header.appendChild(h2);
  header.appendChild(nav);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  return header;
}

export class Element {
  constructor(tag, className, text) {
    this.tag = tag;
    this.className = className;
    this.text = text;
  }
  createElement() {
    const el = document.createElement(this.tag);
    this.addClass(el);
    this.addText(el);
    return el;
  }

  addClass(el) {
    el.classList.add(this.className);
  }

  addText(el) {
    el.textContent = this.text;
  }
}
