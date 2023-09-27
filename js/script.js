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

//model code start

// Get references to the button and the modal
  const modalButton = document.querySelector(
    '[data-modal-toggle="defaultModal"]'
  );
  const modal = document.getElementById("defaultModal");
  const closeModalButtons = document.querySelectorAll(
    '[data-modal-hide="defaultModal"]'
  );
  
  // Function to open the modal
  function openModal() {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent scrolling when the modal is open
  }
  
  // Function to close the modal
  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto"; // Allow scrolling when the modal is closed
  }
  
  // Event listener to open the modal when the button is clicked
  modalButton.addEventListener("click", openModal);
  
  // Event listeners to close the modal when close buttons are clicked
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });
  
  // Event listener to close the modal when clicking outside the modal
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

//model code end



document.getElementById("custom-desktop").addEventListener("click", function () {
    // Trigger the GrapeJS functionality for the desktop device
    editor.setDevice("Desktop");

    const desktopPaths = document.querySelectorAll("#custom-desktop svg path"); // Select all path elements
  
    desktopPaths.forEach(function (path) {
      path.setAttribute("fill", "#1A53E7"); // Change the fill color
    });

    const tabletPaths = document.querySelectorAll("#custom-tablet svg path"); // Select all path elements
    
    tabletPaths.forEach(function (path) {
      path.setAttribute("fill", "#a3a3a3"); // Change the fill color
    });

    const mobilePaths = document.querySelectorAll("#custom-mobile svg path"); // Select all path elements
  
    mobilePaths.forEach(function (path) {
      path.setAttribute("fill", "#a3a3a3"); // Change the fill color
    });

});

document.getElementById("custom-tablet").addEventListener("click", function () {
  // Trigger the GrapeJS functionality for the tablet device
  editor.setDevice("Tablet");
  
  // Update the fill attribute of the SVG
  const tabletPaths = document.querySelectorAll("#custom-tablet svg path"); // Select all path elements
  
  tabletPaths.forEach(function (path) {
    path.setAttribute("fill", "#1A53E7"); // Change the fill color
  });

  const desktopPaths = document.querySelectorAll("#custom-desktop svg path"); // Select all path elements
  
  desktopPaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });

  const mobilePaths = document.querySelectorAll("#custom-mobile svg path"); // Select all path elements
  
  mobilePaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });

});

document.getElementById("custom-mobile").addEventListener("click", function () {
  // Trigger the GrapeJS functionality for the mobile device
  editor.setDevice("Mobile portrait");

  // Update the fill attribute of the SVG
  const mobilePaths = document.querySelectorAll("#custom-mobile svg path"); // Select all path elements
  
  mobilePaths.forEach(function (path) {
    path.setAttribute("fill", "#1A53E7"); // Change the fill color
  });

  const desktopPaths = document.querySelectorAll("#custom-desktop svg path"); // Select all path elements
  
  desktopPaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });

  const tabletPaths = document.querySelectorAll("#custom-tablet svg path"); // Select all path elements
  tabletPaths.forEach(function (path) {
    path.setAttribute("fill", "#a3a3a3"); // Change the fill color
  });

});