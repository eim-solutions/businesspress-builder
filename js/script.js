// JavaScript to toggle the accordion content
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
    const toggle = accordion.querySelector('.accordion-open');
    const content = accordion.querySelector('.accordion-close');
    
    toggle.addEventListener('click', () => {
        content.classList.toggle('hidden');
        toggle.querySelector('svg').classList.toggle('rotate-180');
    });
});
