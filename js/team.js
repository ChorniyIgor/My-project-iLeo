jQuery('document').ready(function($){
  $('.photo').slick({
        autoplay : true,
        autoplaySpeed : 4000,
        speed: 1000,
        dots : true,
        arrows : false,
        pauseOnHover:false,
        responsive: [
               {
                 breakpoint: 767,
                 settings: {
                   dots : false,
                   arrows : true
                 }
               }

             ]
  });
  $('.about-company-reviews-slider').slick({
        autoplay : true,
        autoplaySpeed : 4000,
        speed: 1000,
        dots : false,
        arrows : true,
        pauseOnHover:false,
        responsive: [
               {
                 breakpoint: 767,
                 settings: {
                   dots : false,
                   arrows : false
                 }
               }

             ]
  });
  $('.translators-team__slider').slick({
        autoplay : true,
        autoplaySpeed : 4000,
        speed: 1000,
        dots : true,
        arrows : false,
        pauseOnHover:false,   
        responsive: [
               {
                 breakpoint: 767,
                 settings: {
                   dots : false,
                   arrows : true
                 }
               }

             ]
  });
});
