// Add an event listener to track when an element is selected
editor.on('component:selected', (event) => {

    // Get the class names of the selected component as an array
    const classCollection = event.get('classes');
    const classNames = classCollection.models.map(classModel => classModel.get('name'));

    // Keep track of added class names
    const addedClassNames = new Set(classNames);

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
        aElement.className = 'px-2 py-1  text-xs ml-1.5 text-white bg-extraLightBlue rounded-full inline-block';
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


    // Add an event listener to the input field
    const inputElement = document.getElementById('add-custom-classes'); // Replace with your actual input element's ID
    inputElement.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const classNameToAdd = e.target.value.trim();
            if (classNameToAdd && !addedClassNames.has(classNameToAdd)) {
                // Create a new <li> element for the class
                const liElement = document.createElement('li');
                liElement.className = 'inline-block';

                const aElement = document.createElement('a');
                aElement.href = '#';
                aElement.className = 'px-2 py-1 text-xs ml-1.5 text-white bg-extraLightBlue rounded-full inline-block';
                aElement.textContent = classNameToAdd;

                liElement.appendChild(aElement);

                // Add the <li> element to the custom-classes list
                const ulElement = document.querySelector('.custom-classes'); // Replace with your actual selector
                ulElement.appendChild(liElement);

                // Add the class name to the set to prevent duplicates
                addedClassNames.add(classNameToAdd);

                // Clear the input field after adding the class
                e.target.value = '';

                // Set the class on the selected component
                const selectedComponent = editor.getSelected();
                if (selectedComponent) {
                    selectedComponent.setClass(classNameToAdd);
                }

            }else{
                // Clear the input field after adding the class
                e.target.value = '';
            }
        }
    });

});