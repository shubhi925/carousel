const carouselImg = document.querySelector(".carouselImage");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const btns = document.querySelectorAll(".btn");

nextBtn.addEventListener("click", () => nextImg());
prevBtn.addEventListener("click", () => prevPage());

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentImg = index;
    updateCarousel();
  });
});

let currentImg = 0;
setInterval(changeImg, 3000);

function changeImg() {
  currentImg++;
  if (currentImg > 3) {
    currentImg = 0;
  }
  updateCarousel();
}

function nextImg() {
  currentImg++;
  if (currentImg > 3) {
    currentImg = 0;
  }
  updateCarousel();
}

function prevPage() {
  currentImg--;
  if (currentImg < 0) {
    currentImg = 3;
  }
  updateCarousel();
}

function updateCarousel() {
  carouselImg.src = `./images/img_${currentImg}.jpg`;
  btns.forEach((btn, index) => {
    if (index == currentImg) {
      btn.classList.add("bg-gray-400");
      btn.classList.remove("bg-gray-700");
    } else {
      btn.classList.add("bg-gray-700");
      btn.classList.remove("bg-gray-400");
    }
  });
}
