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


// set shapes container height to document height

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

// generate shapes and insert them into the document

// * sometimes it looks good and often it looks
// too cluttered. decided not to use it *

// max/min number of each shape
// let max = 3;
// let min = 3;
// // colors
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// // doc width and height (height already defined)
// docWidth = window.innerWidth;

// on window resize: recalculate left position of each shape
// window.addEventListener("resize", function() {
//   // determine new width
//   docWidth = window.innerWidth;
//
//   // get all shapes
//   let shapes = document.querySelectorAll(".shape");
//
//   // set new values
//   for (let i = 0; i < shapes.length; i++) {
//     let x = Math.floor(Math.random() * docWidth);
//     shapes[i].style.setProperty("left", x + "px");
//   }
// });

// create rectangles
// number of rectangles
// let num = Math.floor(Math.random() * (max - min)) + min;
// // max width and height of rectangles
// let maxW = 1000;
// let maxH = 1000;
// // min width and height
// let minW = 100;
// let minH = 100;
// for (let i = 0; i < num; i++) {
//   // create element
//   let rect = document.createElement("div");
//   // add shape class
//   rect.classList.add("shape");
//   // set width and height
//   let w = Math.floor(Math.random() * (maxW - minW)) + minW;
//   let h = Math.floor(Math.random() * (maxH - minH)) + minH;
//   rect.style.setProperty("width", w + "px");
//   rect.style.setProperty("height", h + "px");
//   // set color
//   // random color
//   let color = Math.floor(Math.random() * colors.length);
//   rect.style.setProperty("background-color", colors[color]);
//   // set rotation
//   let rotation = Math.floor(Math.random() * 360);
//   rect.style.setProperty("transform", "rotate(" + rotation + "deg)");
//   // set position
//   let x = Math.floor(Math.random() * docWidth);
//   let y = Math.floor(Math.random() * docHeight);
//   rect.style.setProperty("top", y + "px");
//   rect.style.setProperty("left", (x - w) + "px");
//   // insert into document
//   shapeContainer.appendChild(rect);
// }
//
// // create circles
// // number of circles
// num = Math.floor(Math.random() * (max - min)) + min;
// // max radius
// let maxR = 1000;
// // min radius
// let minR = 100;
// for (let i = 0; i < num; i++) {
//   // create element
//   let circle = document.createElement("div");
//   // add shape class
//   circle.classList.add("shape");
//   // set border radius
//   circle.style.setProperty("border-radius", "50%");
//   // set width and height
//   let r = Math.floor(Math.random() * (maxR - minR)) + minR;
//   circle.style.setProperty("width", r + "px");
//   circle.style.setProperty("height", r + "px");
//   // set color
//   // random color
//   let color = Math.floor(Math.random() * colors.length);
//   circle.style.setProperty("background-color", colors[color]);
//   // set position
//   let x = Math.floor(Math.random() * docWidth);
//   let y = Math.floor(Math.random() * docHeight);
//   circle.style.setProperty("top", y + "px");
//   circle.style.setProperty("left", (x - r) + "px");
//   // insert into document
//   shapeContainer.appendChild(circle);
// }
//
// // create triangles
// // number of triangles
// num = Math.floor(Math.random() * (max - min)) + min;
// // max width and height of triangles
// let maxSize = 500;
// // min size
// let minSize = 100;
// for (let i = 0; i < num; i++) {
//   // create element
//   let tri = document.createElement("div");
//   // add shape class
//   tri.classList.add("shape");
//   // make it a triangle with random color
//   let size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
//   // random color
//   let color = Math.floor(Math.random() * colors.length);
//   tri.style.setProperty("border-left", size + "px solid transparent");
//   tri.style.setProperty("border-right", size + "px solid transparent");
//   tri.style.setProperty("border-top", size + "px solid " + colors[color]);
//   // set rotation
//   let rotation = Math.floor(Math.random() * 360);
//   tri.style.setProperty("transform", "rotate(" + rotation + "deg)");
//   // set position
//   let x = Math.floor(Math.random() * docWidth);
//   let y = Math.floor(Math.random() * docHeight);
//   tri.style.setProperty("top", y + "px");
//   tri.style.setProperty("left", (x - size) + "px");
//   // insert into document
//   shapeContainer.appendChild(tri);
// }

// // get shapes
// let shapes = document.querySelectorAll(".shape");
// // get window width
// let w = window.innerWidth;
//
// // offset to get shapes off to the left of the screen
// let offset = 200;
// for (let i = 0; i < shapes.length; i++) {
//   // set random left position between -200 and width
//   let x = Math.floor(Math.random() * (w + offset)) - offset;
//   shapes[i].style.setProperty("left", x + "px");
//   // set random top position between -200 and height
//   let y = Math.floor(Math.random() * (docHeight + offset)) - offset;
//   shapes[i].style.setProperty("top", y + "px");
// }
