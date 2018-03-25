$(document).ready(function () {
  $('.asortyment-slider').slick({
    autoplay: false,
    autoplaySpeed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    prevArrow: '<img src="img/arrow-left.png" alt="prev" class="slick-prev">',
    nextArrow: '<img src="img/arrow-right.png" alt="next" class="slick-next">',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
});  