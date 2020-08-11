// galeria de fotos

const [current, imgs] = [
  document.querySelector("#current"),
  document.querySelectorAll(".imgs img"),
];
const opacity = 0.4;

// Set first img opacity
imgs[0].style.opacity = 0.4;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // reset
  imgs.forEach((img) => (img.style.opacity = 1));
  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in classe
  current.classList.add("fade-in");
  // Remove fade-in after 0.5s
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);
  // Change opacity
  e.target.style.opacity = opacity;
}
