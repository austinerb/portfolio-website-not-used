// PARALLAX

// get shapes
let shapesAll = document.querySelectorAll(".shape");

// get starting position of each shape
let shapes = [];
for (let i = 0; i < shapesAll.length; i++) {
  shapes[i] = [shapesAll[i], shapesAll[i].offsetTop];
}

// parallax multiplier
let multiplier = .5;

// on scroll event
document.addEventListener("scroll", setShapesTop);

// set new shape positions
function setShapesTop() {
  let scrollY = window.scrollY;
  let top = 0;
  for(let i = 0; i < shapes.length; i++) {
    top = shapes[i][1] + scrollY * multiplier;
    shapes[i][0].style.setProperty("top", top+"px");
  }
}


// set shapes container height equal to document height

// get shapes container
let shapeContainer = document.querySelector(".shapes-container");
// calc body height
let body = document.body;
let html = document.documentElement;
let docHeight = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
// get footer height
let footerHeight = document.querySelector("footer").offsetHeight;
// hacky way to get this to work
let height = docHeight - footerHeight;
// set shapes container height to document height
shapeContainer.style.setProperty("height", docHeight + "px");
// resize shape container height on window resize
window.addEventListener("resize", function() {
  // calc body height
  docHeight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

    height = docHeight - footerHeight;
    shapeContainer.style.setProperty("height", height + "px");
});


// mobile menu display

let menuBtn = document.querySelector(".nav-menu-btn");
let menuBars = document.querySelector(".nav-menu-bars");
let menuClose = document.querySelector(".nav-menu-close");
let menuMobile = document.querySelector(".nav-menu-mobile-container");
let menuClickaway = document.querySelector(".nav-menu-mobile-clickaway");
let menuLinks = document.querySelectorAll(".nav-menu-mobile li a");

menuBtn.addEventListener("click", toggleMenu);
menuClickaway.addEventListener("click", toggleMenu);
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", toggleMenu);
}

// toggle display of menu and menu buttons
function toggleMenu() {
  menuBars.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
  menuMobile.classList.toggle("hidden");
  menuClickaway.classList.toggle("hidden");
}


// copy email to clipboard

let email = document.querySelector(".contact-email");
let emailAlert = document.querySelector(".contact-email-display-msg-container");
email.addEventListener("click", function() {
  navigator.clipboard.writeText("austin@websitesbyerb.com");
  emailAlert.classList.toggle("hidden");
});
emailAlert.addEventListener("click", function(){
  emailAlert.classList.toggle("hidden");
});
