import { skillWidth } from "./resume";
export const mainMenu = () => {
  const mainMenu = document.querySelector(".main-menu");
  const links = document.querySelectorAll(".main-menu__link");
  const sections = document.querySelectorAll(".section");
  const leftSection = document.querySelector(".container__left");
  const toggleBtn = document.querySelector(".menu-toggle");
  const navArrowContainer = document.querySelector(".arrows__nav");

  const menuClick = e => {
    const link = e.target.closest(".main-menu__link");
    if (!link) return;
    if (link.classList.contains("main-menu__link--active")) return;
    links.forEach(link => link.classList.remove("main-menu__link--active"));

    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    sections.forEach(section => section.classList.remove("visible"));
    section.classList.add("visible");
    link.classList.add("main-menu__link--active");

    skillWidth(id === "#resume");
  };
  const openLeftContainer = e => {
    e.currentTarget.classList.toggle("open");
    if (e.currentTarget.classList.contains("open")) {
      leftSection.classList.add("open");
    } else {
      leftSection.classList.remove("open");
    }
  };
  const navArrowClick = e => {
    if (e.target === navArrowContainer) {
      return;
    }
    const direction = e.target.closest("div");
    const currSection = document.querySelector("section.visible");
    sections.forEach(section => section.classList.remove("visible"));
    links.forEach(link => link.classList.remove("main-menu__link--active"));
    if (direction.classList.contains("arrows__nav--right")) {
      if (currSection.nextElementSibling) {
        currSection.nextElementSibling.classList.add("visible");
        document
          .querySelector(`a[href='#${currSection.id}']`)
          .closest("li")
          .nextElementSibling.querySelector("a")
          .classList.add("main-menu__link--active");
      } else {
        sections[0].classList.add("visible");
        links[0].classList.add("main-menu__link--active");
      }
    } else if (direction.classList.contains("arrows__nav--left")) {
      if (currSection.previousElementSibling) {
        currSection.previousElementSibling.classList.add("visible");
        document
          .querySelector(`a[href='#${currSection.id}']`)
          .closest("li")
          .previousElementSibling.querySelector("a")
          .classList.add("main-menu__link--active");
      } else {
        sections[sections.length - 1].classList.add("visible");
        links[links.length - 1].classList.add("main-menu__link--active");
      }
    } else {
      return;
    }
    skillWidth(document.querySelector("#resume.visible"));
  };

  mainMenu.addEventListener("click", menuClick);
  toggleBtn.addEventListener("click", openLeftContainer);
  navArrowContainer.addEventListener("click", navArrowClick);
};
