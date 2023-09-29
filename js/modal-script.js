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

// JavaScript code to open the modal and backdrop
function openModal() {
  document.getElementById("defaultModal").classList.remove("hidden");
  document.getElementById("modalBackdrop").classList.remove("hidden");
}

// JavaScript code to close the modal and backdrop
function closeModal() {
  document.getElementById("defaultModal").classList.add("hidden");
  document.getElementById("modalBackdrop").classList.add("hidden");
}

// Example: Open the modal when a button is clicked
//document.getElementById("openModalButton").addEventListener("click", openModal);
const openModalElement = document.getElementById('openModalButton');
if (openModalElement) {
  openModalElement.addEventListener('openModalButton', openModal);
}

// Example: Close the modal when a button inside the modal is clicked
const closeModalElements = document.getElementById('closeModalButton');
if (closeModalElements) {
  closeModalElements.addEventListener('closeModalButton', closeModal);
}