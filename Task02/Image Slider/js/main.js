const prev = document.getElementById("prev");
const next = document.getElementById("next");
const firstImage = document.querySelector(".slider-item");
const Allslides = document.querySelectorAll(".slider-item").length;
const imgWidth = firstImage.clientWidth;
let slider = document.getElementById("slider");

let currentIndex = 0;

// Move the slider
function moveSlider() {
  slider.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
}

// Next Button
next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= Allslides) currentIndex = 0;
  moveSlider();
});

// Prev Button
prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = Allslides - 1;
  moveSlider();
});

// Auto Slide every 3 seconds
setInterval(() => {
  currentIndex++;
  if (currentIndex >= Allslides) currentIndex = 0;
  moveSlider();
}, 3000);
