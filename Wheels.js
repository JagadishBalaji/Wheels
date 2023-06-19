const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
let currentSlide = 0;
let isZoomed = false;

updateArrows();

slider.addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    isZoomed = !isZoomed;
    slides[currentSlide].classList.toggle("active", isZoomed);
  }
});

leftArrow.addEventListener("click", function() {
  isZoomed = false;
  slides[currentSlide].classList.remove("active");
  currentSlide--;
  slides[currentSlide].classList.add("active");
  updateArrows();
});

rightArrow.addEventListener("click", function() {
  isZoomed = false;
  slides[currentSlide].classList.remove("active");
  currentSlide++;
  
  slides[currentSlide].classList.add("active");
  updateArrows();
});

function updateArrows() {
  leftArrow.disabled = currentSlide === 0;
  rightArrow.disabled = currentSlide === slides.length - 1;
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    leftArrow.click();
  } else if (event.keyCode === 39) {
    rightArrow.click();
  }
});

slides.forEach((slide, index) => {
   
  slide.addEventListener("click", () => {
    if (currentSlide !== index) {
       
      slides[currentSlide].classList.remove("active");
      currentSlide = index;
      slides[currentSlide].classList.add("active");
      updateArrows();
    }
  });
});
