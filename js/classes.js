// Define the function to create a list item
function createListItem(className, ulElement, selectedComponent) {

    const liElement = document.createElement('li');
    liElement.className = 'inline-block px-2 py-1 text-xs ml-1.5 text-white bg-extraLightBlue rounded-full cursor-pointer';

    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = className;

    const removeIcon = document.createElement('span');
    removeIcon.className = 'remove-icon ml-2';
    removeIcon.textContent = 'x';

    // Add a click event listener to the remove icon
    removeIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the parent element

        const classNameToRemove = e.target.parentElement.textContent.slice(0, -1).trim(); // Get the class name from the clicked element

        // Remove the class from the selected component's classes
        const existingClasses = selectedComponent.getClasses();
        const updatedClasses = existingClasses.filter(className => className !== classNameToRemove);
        selectedComponent.setClass(updatedClasses);

        // Remove the list item from the DOM
        ulElement.removeChild(e.target.parentElement);
    });

    liElement.appendChild(aElement);
    liElement.appendChild(removeIcon);

    return liElement;
}

// Add an event listener to track when an element is selected
editor.on('component:selected', (event) => {
    // Get the class names of the selected component as an array
    const classCollection = event.get('classes');
    
    const classNames = classCollection.models.map(classModel => classModel.get('name'));

    //link setting
    linkSetting(event);

    //visibility Setting
    visibilitySetting();

    // Find the existing <ul> element
    const ulElement = document.querySelector('.custom-classes');

    // Clear any existing list items
    ulElement.innerHTML = '';

    // Iterate through the class names and create <li> elements
    classNames.forEach(className => {
        const liElement = createListItem(className, ulElement, editor.getSelected());
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

            if (classNameToAdd) {

                const selectedComponent = editor.getSelected();
                const existingClasses = selectedComponent.getClasses();
                // Check if the class already exists
                if (!existingClasses.includes(classNameToAdd)) { 
                    // Add the new class to the existing classes
                    existingClasses.push(classNameToAdd);
    
                    // Set the updated classes to the selected component
                    selectedComponent.setClass(existingClasses);
    
                    const liElement = createListItem(classNameToAdd, ulElement, selectedComponent);
                    ulElement.appendChild(liElement);
                }
                e.target.value = '';
            } else {
                e.target.value = '';
            }
        }
    });
});


//Link Setting
function linkSetting(selectedComponent) {

  const anchorUrlValue = document.getElementById("anchorUrl");
  const urlTargetValue = document.getElementById("urlTarget");

  // Check if the selected component is an anchor (<a>) element
  if (selectedComponent && selectedComponent.get("tagName") === "a") {
    // Update the anchorUrlValue value with the href attribute of the selected <a> element
    anchorUrlValue.value = selectedComponent.get("attributes").href || "";

    // Check if the target attribute is "_blank"
    const targetAttribute = selectedComponent.get("attributes").target;
    urlTargetValue.checked = targetAttribute === "_blank";
  } else {
    // Handle the case when a non-anchor component is selected, or nothing is selected.
    document.getElementById("anchorUrl").value = "";
    document.getElementById("urlTarget").checked = false;
  }

  // Event listener for changes in the anchorUrlValue
  anchorUrlValue.addEventListener("change", function () {

    let link = anchorUrlValue.value.trim();
    const selectedComponent = editor.getSelected(); // Get the currently selected component

     if (!link || !selectedComponent) {
      // If the input field is empty, set an empty link
      link = "";
    } else if (!/^https?:\/\//i.test(link)) {
      // If the link doesn't start with "http://" or "https://", add "http://" as a default
      link = "http://" + link;
    }

    // Update the href attribute of the selected anchor element (if available)
    if (selectedComponent.get("tagName") === "a") {
     
      const href = link;
      selectedComponent.setAttributes({ href });

      // Check if the anchor has an href attribute
      if (href) {
        // Add a class to change the text color to blue (you can apply your CSS classes)
        selectedComponent.addClass("text-blue-400 hover:underline");
      } else {
        // Remove the class to revert to default text color
        selectedComponent.removeClass("text-blue-400 hover:underline");
      }
    }
  });

  // Event listener for changes in the urlTargetValue
  urlTargetValue.addEventListener("change", function () {

    const selectedComponent = editor.getSelected(); // Get the currently selected component

    if (selectedComponent && selectedComponent.get("tagName") === "a") {
      const href = selectedComponent.get("attributes").href || "";
      const target = this.checked ? "_blank" : null;
      selectedComponent.setAttributes({ href, target });
    }
  });
}

//visibility Setting
function visibilitySetting() {
  // Find the checkbox element associated with the selected component
  const visibilityTarget = document.getElementById("visibilityToggle");

  // Clear the checkbox by setting its 'checked' property to false
  visibilityTarget.checked = false;

  // Add an event listener to the checkbox to toggle visibility
  visibilityTarget.addEventListener("change", (e) => {
    const selectedComponent = editor.getSelected();
    // Toggle the "hidden" class based on the checkbox state
    if (e.target.checked) {
      selectedComponent.addClass("hidden");
    } else {
      selectedComponent.removeClass("hidden");
    }
  });
}