// ===================================
// 2. about Faqs
// ===================================
const faqs = document.querySelectorAll(".according__faq");
const answers = document.querySelectorAll(".according__answer");

faqs.forEach((faqItem, index) => {
    faqItem.addEventListener('click', () => {
        // Remove active class from all
        faqs.forEach(item => item.classList.remove('active'));
        answers.forEach(answerItem => answerItem.classList.remove('active'));

        // Add active class to clicked item
        faqItem.classList.add('active');
        answers[index].classList.add('active');
    });
});




// ===================================
// 2. Dark Mode Toggle
// ===================================
const body = document.body;
const modeToggle = document.querySelector(".dark-light");
const heroBg = document.querySelector(".person__person-bg");
const footerBg = document.querySelector(".footer__footer-bg-main-img");

// Function to apply dark mode
function applyDarkMode(isDark) {
    body.classList.toggle("dark", isDark);
    heroBg.classList.toggle("no-bg", !isDark);
    footerBg.classList.toggle("no-bg", !isDark);
    localStorage.setItem("mode", isDark ? "dark-mode" : "light-mode");
}

// Load mode from localStorage
applyDarkMode(localStorage.getItem("mode") === "dark-mode");

// Event listener for toggle button
modeToggle.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark");
    applyDarkMode(isDark);
});
// ===================================
// 3. Header Appearance on Scroll
// ===================================
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
        header.classList.add("header-appear");
    } else {
        header.classList.remove("header-appear");
    }
});


// ===================================
// 5. Owl Carousel Setup
// ===================================
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
      576: { items: 2 },
      768: { items: 3 }
  }
});

// ===================================
// 6. Typing Animation
// ===================================
const skills = ["HTML", "CSS", "BOOTSTRAP", "JS", "TS", "JQUERY", "ANGULAR JS", "ANGULAR", "DOT NET MVC5", "DOT NET CORE", "WEB API'S", "SQL", "CLEAN CODE"];

new Typed(".typing", {
    strings: skills,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
// ===================================
// 7. mySwiper2
// ===================================

var swiper = new Swiper(".mySwiper2", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ===================================
// 8. Menu and Search Bar Toggle
// ===================================
$(document).ready(() => {
  $("#menu-bar").click(() => $('.nav__nav-list').addClass('show'));
  $("#close-bar").click(() => $('.nav__nav-list').removeClass('show'));

  $('#show-search').click(() => {
      $('.fa-search').toggleClass("fa-xmark");
      $('.nav__search-box').toggleClass('searchBoxShow');
  });
});

// ===================================
// 9. Smooth Scroll
// ===================================
document.querySelectorAll("#main-nav a").forEach(anchor => {
  anchor.addEventListener("click", (event) => {
      if (anchor.hash) {
          event.preventDefault();
          document.querySelector(anchor.hash).scrollIntoView({
              behavior: "smooth"
          });
      }
  });
});
// ===================================
// 10. circle
// ===================================
$(document).ready(function () {
  $(".circle").each(function () {
      const percentage = $(this).data("percent");
      const circlePath = $(this).find(".active");
      const text = $(this).find(".text");
      const circumference = 295.31; // Full circle length

      // Set stroke-dasharray for progress effect
      circlePath.css("stroke-dasharray", `${(circumference * percentage) / 100}, ${circumference}`);

      // Animate percentage text update
      $({ countNum: 0 }).animate({ countNum: percentage }, {
          duration: 1000,
          easing: "swing",
          step: function () {
              text.text(`${Math.floor(this.countNum)}%`);
          },
          complete: function () {
              text.text(`${percentage}%`);
          }
      });
  });
});
// ===================================
// 10. language small do
// ===================================
$(document).ready(function () {
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

// ===================================
// 4. Back to Top Button
// ===================================
$(document).ready(() => {
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



     


  



