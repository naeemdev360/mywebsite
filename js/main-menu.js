export const mainMenu = () => {
  const mainMenu = document.querySelector(".main-menu");
  const links = document.querySelectorAll(".main-menu__link");
  const sections = document.querySelectorAll(".section");
  const menuClick = e => {
    links.forEach(link => link.classList.remove("main-menu__link--active"));
    const link = e.target.closest(".main-menu__link");
    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    sections.forEach(section => section.classList.remove("visible"));
    section.classList.add("visible");
    link.classList.add("main-menu__link--active");
  };
  mainMenu.addEventListener("click", menuClick);
};
