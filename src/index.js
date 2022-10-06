"use strict";

// this js will unite everything

import content from "./functions/firstLoad";
import loadMenu from "./pages/menu";
import "./style.css";

content();

class Page {
  constructor(button) {
    this.button = button;
  }
  // will determine if the button contains the active class
  activePage() {
    const value = this.button.classList.contains("button--active");
    this.activeClass(value);
  }

  // if the buttons doent contain the class, it will be added, if it do have
  // class, it will be removed
  activeClass(value) {
    if (!value) {
      this.button.classList.add("button--active");
      this.loadActivePage();
    } else if (value === true) {
      this.button.classList.remove("button--active");
    }
    this.loadActivePage();
  }

  // it will load the pages according to the button that contains the class
  loadActivePage() {
    if (this.button.classList.contains("nav__pages--menu")) {
      loadMenu();
    } else if (this.button.classList.contains("nav__pages--home")) {
      content();
    }
  }
}

export default function switchingPages() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    // when a button is clicked, it will call the class constructor above
    button.addEventListener("click", function (element) {
      const active = new Page(element.target).activePage();
    });
  });
}

switchingPages();
