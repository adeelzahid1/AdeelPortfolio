// Init Scrollspy
$('body').scrollspy({
  target: '#main-nav'
});

// Smooth Scrolling
$("#main-nav a").on('click', function(event) {
  if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 800, function() {

          window.location.hash = hash;
      });
  }
});


$(window).on('scroll', function () {
  if ($(this).scrollTop() >= 250) { // Set position from top to add class
      $('header').addClass('header-appear');
  }
  else {
      $('header').removeClass('header-appear');
  }
});

function toggle(){
  var trailer = document.querySelector(".trailer")
  trailer.classList.toggle("active")
}










    
    // Red small Back to Top scroll button start

    $(document).ready(function(){
        $(window).scroll(function(){
          if($(window).scrollTop() > 300){
            $('.back-to-top').css({
              "opacity":"1", "pointer-events":"auto"
            });
          }else{
            $('.back-to-top').css({
              "opacity":"0", "pointer-events":"none"
            });
          }
        });
        $('.back-to-top').click(function(){
          $('html').animate({scrollTop:0}, 500);
        });
      });

      // Red small Back to Top scroll button End




      var swiper = new Swiper(".mySwiper2", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });








      var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 1,
        spaceBetween: 20,
       
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          700: {
            slidesPerView: 2,
            // spaceBetween: 40,
            slidesPerGroup: 2,
          },
          1000: {
            slidesPerView: 3,
            // spaceBetween: 50,
            slidesPerGroup: 3,
          },
        },
      });


      $(".owl-products").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        loop: false,
        // center:true,
        autoplay: false,
        autoplayHoverPause:false,
        slideSpeed: 3000,
        paginationSpeed: 5000,
        smartSpeed:1000,
        margin:0,
        responsive: {
            576: {
                items: 2,
                
            },
            768: {
                items:3,
            }
          
           
            
        }
      });



       // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Zahid"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
  });