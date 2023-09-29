// Initialize GrapesJS
const editor = grapesjs.init({
    canvas: {
        styles: [
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            "https://unpkg.com/swiper@7/swiper-bundle.min.css"
        ]
    },
    styleManager: { // Configure the Style Manager
        clearProperties: 1,
    },
    blockManager: {
        appendTo: "#block",
    },
    panels: { defaults: [] },
    container: '#grapesjs-container',
    fromElement: true, // Pass true to load the initial HTML from the container
    storageManager: false, // You can configure storage options as needed
    // plugins: ['grapesjs-preset-webpage'], // Include any additional plugins you need

});

editor.BlockManager.add('navigations-center-block', {
    label: 'Navigations Center',
    content: '<div class="bg-white rounded-lg flex justify-between gap-2 items-center p-4 border border-2 border-gray-300 hover:border-blue-700 cursor-pointer"><div class=""><img src="./assets/svg/business-press.svg" alt="business-press" /></div><div class="flex justify-between gap-5 items-center text-xs"><a href="">Menu item</a><a href="">Menu item</a><a href="">Menu item</a><a href="">Menu item</a><a href="">Menu item</a></div><div><button class="rounded-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-1 gap-2 text-[10px] mx-auto my-0">Contact Us</button></div></div>',
});

editor.BlockManager.add('navigations-left-block', {
    label: 'Navigations Left',
    content: '<div class="bg-white rounded-lg flex justify-between gap-2 items-center p-4 border border-2 border-gray-300 hover:border-blue-700 cursor-pointer"> <div class="flex gap-6 items-center"> <img src="./assets/svg/business-press.svg" alt="business-press" /> <div class="flex justify-between gap-5 items-center text-xs"> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> </div> </div> <div> <button class="rounded-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-1 gap-2 text-[10px] mx-auto my-0"> Contact Us </button> </div> </div>',
}); 

// Add an event listener to track when an element is selected
editor.on('component:selected', (event) => {

    // Get the class names of the selected component as an array
    const classCollection = event.get('classes');
    const classNames = classCollection.models.map(classModel => classModel.get('name'));

    // Find the existing <ul> element
    const ulElement = document.querySelector('.custom-classes'); // Replace with your actual selector

    // Clear any existing list items
    ulElement.innerHTML = '';

    // Iterate through the class names and create <li> elements
    classNames.forEach(className => {
        const liElement = document.createElement('li');
        liElement.className = 'inline-block';

        const aElement = document.createElement('a');
        aElement.href = '#';
        aElement.className = 'px-2 py-1 text-xs text-white bg-extraLightBlue rounded-full inline-block';
        aElement.textContent = className;

        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    });


    // JavaScript to toggle the accordion content
    const accordions = document.querySelectorAll(".accordion-class");
    
    accordions.forEach((accordion) => {
        const toggle = accordion.querySelector(".accordion-class-open");
        const content = accordion.querySelector(".accordion-class-close");
        content.classList.remove("hidden");
        toggle.querySelector("svg").classList.toggle("rotate-180");
        toggle.addEventListener("click", () => {
            content.classList.toggle("hidden");
            toggle.querySelector("svg").classList.toggle("rotate-180");
        });
    });

    
});

