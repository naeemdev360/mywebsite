import { testimonialData } from "./testimonialData";

export const testimonial = () => {
  //Update age
  const ageContainer = document.getElementById("age-container");
  const age = new Date().getFullYear() - 2000; // birth year 2000
  ageContainer.innerText = age;
  //Testimonilas
  const testimonialContainer = document.querySelector(".testimonials");
  for (let i = 1; i <= testimonialData.length; i++) {
    const { name, country, text, image } = testimonialData[i - 1];
    testimonialContainer.innerHTML += `
    <div class="testimonial testimonial--${i}">
    <div class="testimonial__avatar">
      <img
        src="images/testimonials/${image}"
        alt="${name}"
      />
    </div>
    <p class="testimonial__text">
      ${text}
    </p>
    <div class="testimonial__footer">
      <h5 class="testimonial__footer--name">
        <span>${name}</span>
        <span>${country}</span>
        <a
          target="_blank"
          class="testimonial__footer--fiverr-link"
          href="https://www.fiverr.com/naeem215/build-a-mern-stack-web-application"
        >
          <svg class="testimonial__footer--fiverr-icon">
            <use
              xlink:href="icons/Mycollection-SVG-sprite.svg#fiverr"
            ></use>
          </svg>
        </a>
      </h5>
      <span class="testimonial__footer--icon">
        <svg class="testimonial--icon">
          <use
            xlink:href="icons/Mycollection-SVG-sprite.svg#right-quote-sign"
          ></use>
        </svg>
      </span>
    </div>
  </div>
    `;
  }
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 2,
      margin: 40,
      stagePadding: 0,
      loop: true,
      // responsiveClass: true,
      dots: false,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
      },
    });
  });
};
