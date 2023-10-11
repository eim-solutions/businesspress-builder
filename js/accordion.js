// JavaScript to toggle the accordion content
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const toggle = accordion.querySelector(".accordion-open");
  const content = accordion.querySelector(".accordion-close");

  toggle.addEventListener("click", () => {
    content.classList.toggle("hidden");
    const svg = toggle.querySelector("svg");
    if (svg) {
      svg.classList.toggle("rotate-180");
    }
  });
});
