import { paralex, mouseMoveParalex } from "./paralex";
import { skillWidth } from "./resume";
import { mainMenu } from "./main-menu";
import { testimonial } from "./testimonial";
import { contactForm } from "./contactForm";
import { sortable } from "./portfolio";
import { home } from "./home";
// import { skillWidth } from "./resume";
//home
home();
//paralex
// window.addEventListener("mousemove", paralex);
paralex();
window.addEventListener("mousemove", mouseMoveParalex);

//testimonial
testimonial();
//main-menu
mainMenu();
// contact from
contactForm();
//resume sction
// skillWidth();
//portfolio
sortable();

//is now in resume page
if (window.location.href.includes("resume")) {
  skillWidth(true);
}
