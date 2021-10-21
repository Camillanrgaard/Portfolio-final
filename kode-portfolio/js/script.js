//Navigation
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.querySelector(".navbarClass").style.backgroundColor = "#1B262C";
    document.querySelector("#navbar-right").style.filter = "brightness(100)";
    document.getElementById("logo").style.width = "25%";
    document.getElementById("logo").style.filter = "brightness(100)";
    document.getElementById("menu-icon").style.color = "white";
  } else {
    document.getElementById("navbar").style.padding = "";
    document.querySelector(".navbarClass").style.backgroundColor =
      "transparent";
    document.querySelector("#navbar-right").style.filter = "brightness(0)";
    document.querySelector(".nav-link").style.color = "";
    document.getElementById("logo").style.width = "35%";
    document.getElementById("logo").style.filter = "brightness(0)";
    document.getElementById("menu-icon").style.color = "";
  }
}
//Mobile navigation
function myFunction() {
  let x = document.getElementById("navbar-right");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Text effect - hero
let i = 0;
// let A = 0;
let tag = document.getElementById("text");
let html = document.getElementById("text").innerHTML;
let attr = tag.setAttribute("data", html);
let txt = tag.getAttribute("data");
let speed = 170;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//Img slider - work
const slider = document.querySelector(".gallery");
let isDown = false; //isdown checks if we have an active click
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("activeScroll");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("activeScroll");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("activeScroll");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

typeWriter();

// Popup moral box
let modal = document.getElementsByClassName("modal-window");
let btn = document.getElementsByClassName("click-to-open");
let span = document.getElementsByClassName("close");

for (let l = 0; l < btn.length; l++) {
  let thisBtn = btn[l];
  thisBtn.addEventListener(
    "click",
    function () {
      let modal = document.getElementById(this.dataset.modal);
      modal.style.display = "block";
    },
    false
  );
}

for (let l = 0; l < modal.length; l++) {
  modal[l].addEventListener(
    "click",
    function (e) {
      if (e.target.className === "close") {
        this.style.display = "none";
      }
    },
    false
  );
}
