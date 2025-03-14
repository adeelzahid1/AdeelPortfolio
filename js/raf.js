const faqs = document.querySelectorAll(".according__faq");
const answer = document.querySelectorAll(".according__answer");
// faqs.forEach((faq )=>{
//   faq.addEventListener('click',function(){
//     faq.classList.toggle('active');

//   })
// });


faqs.forEach((tab,index)=>{
  tab.addEventListener('click',function(){
    // To remove active class from previous tab
    faqs.forEach((tab) =>{
      return tab.classList.remove('active');
    });
    
    tab.classList.add('active')  ;

    //To Hide Previous tab content
    answer.forEach((c)=>{
      return c.classList.remove('active')
    })
    // To Show Content According To Tab Selected
    answer[index].classList.add('active')
  })
});

// dark mode 
// const body = document.querySelector("body"),
//       modeToggle = document.querySelector(".dark-light"),
//       heroBg = document.querySelector(".person__person-bg"),
//       footerBg = document.querySelector(".footer__footer-bg-main-img");

//       let getMode = localStorage.getItem("mode");
//       if(getMode && getMode === "dark-mode"){
//         body.classList.add("dark");
//       }

// // js code to toggle dark and light mode
//   modeToggle.addEventListener("click" , () =>{
//     modeToggle.classList.toggle("active");
    
//     body.classList.toggle("dark");
    
//     // js code to keep user selected mode even page refresh or file reopen
//     if(!body.classList.contains("dark")){
//         localStorage.setItem("mode" , "light-mode");
//         heroBg.classList.add("no-bg");
//     footerBg.classList.add("no-bg");
        
//     }else{
//         localStorage.setItem("mode" , "dark-mode");
//         heroBg.classList.remove("no-bg");
//         footerBg.classList.remove("no-bg");
//     }
    
//   });
$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 250) { // Set position from top to add class
        $('header').addClass('header-appear');
    }
    else {
        $('header').removeClass('header-appear');
    }
  });
//   
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
  $(document).ready(function(){

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
    
    ///////         Menu-Bar
      $("#menu-bar").on('click',function(){
        $('.nav__nav-list').addClass('show')
      });
      $("#close-bar").on('click',function(){
        $('.nav__nav-list').removeClass('show')
      });
    
      $('#show-search').on('click',function(){
        $('.fa-search').toggleClass("fa-regular fa-xmark");
        $('.nav__search-box').toggleClass('searchBoxShow')
      })
    
     
     
      
      
      function toggle(){
        var trailer = document.querySelector(".trailer")
        trailer.classList.toggle("active")
      }
    
      
    
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
         
         
    
    
    });
    let typed = new Typed(".typing", {
        strings: ["HTML","CSS", "BOOTSTRAP", "JS", "TS", "JQUERY", "ANGULAR JS", "ANGULAR", "DOT NET MVC5", "DOT NET CORE", "WEB API'S", "SQL", "CLEAN CODE"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });

      $(document).ready(function () {
        $(".circle").each(function () {
            let percentage = $(this).attr("data-percent");
            let circlePath = $(this).find(".active");
            let text = $(this).find(".text");
      
            // Calculate stroke-dasharray based on percentage
            let circumference = 295.31; // Original length of circle path
            let dashArray = (circumference * percentage) / 100;
      
            // Animate progress
            $(circlePath).css({
                "stroke-dasharray": dashArray + ", 295.31"
            });
      
            // Animate text percentage count
            $({ countNum: 0 }).animate(
                { countNum: percentage },
                {
                    duration: 1000,
                    easing: "swing",
                    step: function () {
                        text.text(Math.floor(this.countNum) + "%");
                    },
                    complete: function () {
                        text.text(percentage + "%");
                    }
                }
            );
        });
      
      
        // 
      
      
        $(".language__language-col-3").each(function () {
          let score = $(this).data("score"); // Get score value
          let totalDots = 10; // Total number of dots
          let filledDots = Math.round((score / 100) * totalDots); // Calculate filled dots
      
          let dotsContainer = $(this).find(".language__language-dots-flex");
          for (let i = 0; i < totalDots; i++) {
              let spanClass = i < filledDots ? "language__language-span" : "language__language-span-light";
              dotsContainer.append(`<span class="${spanClass}"></span>`);
          }
      });
      });


      $(document).ready(function () {
        $("#menu-bar").on("click", function () {
            $(".nav__nav-list").addClass("show");
        });
    
        $("#close-bar").on("click", function () {
            $(".nav__nav-list").removeClass("show");
        });
    
        // Close navbar if clicked outside
        $(document).on("click", function (event) {
            if (!$(event.target).closest(".nav__nav-list, #menu-button").length) {
                $(".nav__nav-list").removeClass("show");
            }
        });
    });
   