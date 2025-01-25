const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".nextBtn");
const prevBtns = document.querySelectorAll(".prevBtn");
const btn = document.querySelectorAll(".btn");

nextBtns.forEach((nextBtn, index) => {
  nextBtn.addEventListener("click", () => nextPage(index));
});

prevBtns.forEach((prevBtn, index) => {
  prevBtn.addEventListener("click", () => prevPage(index));
});

function nextPage(index) {
  if (index < 3) {
    pages[index].classList.add("hidden");
    pages[index + 1].classList.remove("hidden");
    btn[index + 1].classList.add("bg-lime-600");
  }
}
function prevPage(index) {
  if (index > 0) {
    pages[index].classList.add("hidden");
    pages[index - 1].classList.remove("hidden");
    btn[index].classList.remove("bg-lime-600");
  }
}
