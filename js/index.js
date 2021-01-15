import { paralex } from "./paralex";
import { mainMenu } from "./main-menu";
import { testimonial } from "./testimonial";
import { contactForm } from "./contactForm";
import { sortable } from "./portfolio";
import { home } from "./home";
// import { skillWidth } from "./resume";
//home
home();
//paralex
window.addEventListener("mousemove", paralex);
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
