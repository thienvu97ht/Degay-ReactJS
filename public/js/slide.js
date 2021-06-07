function CarouselInit() {
  var checkWidth = $(window).width();
  var carousel = $(".js-carousel-catmain");
  if (checkWidth < 1000) {
    carousel.addClass("owl-carousel").owlCarousel({
      margin: 0,
      loop: true,
      items: 1,
      nav: false,
      navSpeed: 800,
      autoheight: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        600: {
          items: 1,
        },
      },
    });

    var owlTwo = $(".js-carousel-catmain");
    owlTwo.owlCarousel();
    $(".owl-next-two").click(function () {
      owlTwo.trigger("next.owl.carousel", [700]);
    });
    $(".owl-prev-two").click(function () {
      owlTwo.trigger("prev.owl.carousel", [700]);
    });
  } else {
    if (carousel.data("owlCarousel") != "undefined") {
      carousel.trigger("destroy.owl.carousel").removeClass("owl-carousel");
    }
  }
}
$(document).ready(CarouselInit);
$(window).resize(CarouselInit);

/* Jquery*/
$(document).ready(function () {
  $(".sajid-1").owlCarousel({
    margin: 0,
    loop: true,
    items: 1,
    nav: false,
    navSpeed: 800,
    autoheight: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });

  var owl = $(".sajid-1");
  owl.owlCarousel();
  $(".owl-next-one").click(function () {
    owl.trigger("next.owl.carousel", [700]);
  });
  $(".owl-prev-one").click(function () {
    owl.trigger("prev.owl.carousel", [700]);
  });

});

/* Modal */
$('.sv-slider-modal .owl-carousel').owlCarousel({
  autoplay: false,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  thumbs: true,
  thumbImage: true,
  thumbsPrerendered: true,
  thumbContainerClass: 'owl-thumbs',
  thumbItemClass: 'owl-thumb-item',
  dots: true,
  loop: true,
  items: 1,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
});
