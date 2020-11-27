export const testimonial = () => {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 2,
      margin: 40,
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
