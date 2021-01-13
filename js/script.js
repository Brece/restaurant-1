const nextBtn = document.querySelector(".arrow-right");
const prevBtn = document.querySelector(".arrow-left");
const bgContainer = document.querySelector(".bg-container");


nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


// SLIDER 
let counter = 1;

function nextSlide() {
  counter++;
  checkCounter(counter);
  bgContainer.style.background = `url(img/bg-${counter}.jpeg) center/cover no-repeat`;
}

function prevSlide() {
  counter--;
  checkCounter();
  bgContainer.style.background = `url(img/bg-${counter}.jpeg) center/cover no-repeat`;
}

function checkCounter() {
  if (counter > 3) {
    counter = 1;
  }
  else if (counter < 1) {
    counter = 3;
  }
  return counter;
}

// NAVBAR
let navbar = document.querySelector("#navbar");
let sticky = navbar.offsetTop;

window.onscroll = function(){
  stickyHeader();
}

function stickyHeader(){
  if (window.pageYOffset > sticky){
    navbar.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky");
  }
}
