// JavaScript code to select and upload multiple images
const fileUploadButton = document.getElementById("fileUploadButton");
const selectedFileName = document.getElementById("selectedFileName");
const errorText = document.getElementById("errorText");
const dialogContain = document.getElementById("dialogContain");
const dialogContainData = document.getElementById("dialogContainData");

// Create a hidden input element to handle file selection
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = ".jpg, .jpeg, .gif, .png, .svg"; // Specify accepted file types
fileInput.multiple = true; // Allow multiple file selection

// Function to show Modal body 1 and hide Modal body 2
function showUploadModal() {
  dialogContain.style.display = "flex";
  dialogContainData.style.display = "none";
}

// Function to show Modal body 2 and hide Modal body 1
function showStaticModal() {
  dialogContain.style.display = "none";
  dialogContainData.style.display = "flex";
}

// Listen for button click and trigger file input click
fileUploadButton.addEventListener("click", () => {
  fileInput.click();
  showUploadModal();
});

// Listen for file selection and update the selected file names and images
fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  if (files.length > 0) {
    let totalSize = 0;
    let validFiles = [];

    // Validate each selected file
    for (const file of files) {
      totalSize += file.size;
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB

      if (file.size > maxSizeInBytes) {
        errorText.textContent =
          "One or more selected files exceed the maximum allowed size (2MB each).";
        selectedFileName.textContent = "";
        return;
      }

      validFiles.push(file);
    }

    // Display the selected files in dialogContainData (static div)
    dialogContainData.innerHTML = ""; // Clear previous content
    validFiles.forEach((file) => {
      // Create a container div for each image with a class "image-container"
      const imageContainer = document.createElement("div");
      imageContainer.className = "w-[150px] h-[200px] text-center my-2.5";

      // Create an image element and set its attributes
      const imageElement = document.createElement("img");
      imageElement.className = "w-full h-4/5 object-contain";
      imageElement.src = URL.createObjectURL(file);
      imageElement.alt = file.name; // Set alt text to the file name

      // Create a div for the image name and set its text content
      const imageNameDiv = document.createElement("div");
      imageNameDiv.className =
        "w-full h-1/5 text-xs text-blue-500 text-ellipsis overflow-hidden";
      imageNameDiv.textContent = file.name;

      // Append the image element and image name div to the container div
      imageContainer.appendChild(imageElement);
      imageContainer.appendChild(imageNameDiv);

      // Append the container div to dialogContainData
      dialogContainData.appendChild(imageContainer);
    });

    // Hide Modal body 1 and show Modal body 2
    showStaticModal();

    selectedFileName.textContent = `Selected Files: ${validFiles.length}`;
    errorText.textContent = "";
  } else {
    // If no files are selected, reset the content and display Modal body 1
    dialogContainData.innerHTML = "";
    showUploadModal();

    selectedFileName.textContent = "";
    errorText.textContent = "";
  }
});

// JavaScript code to open the modal and backdrop
function openModal() {
  document.getElementById("defaultModal").classList.remove("hidden");
  document.getElementById("modalBackdrop").classList.remove("hidden");
  showUploadModal(); // Show Modal body 1 initially
}

// JavaScript code to close the modal and backdrop
function closeModal() {
  document.getElementById("defaultModal").classList.add("hidden");
  document.getElementById("modalBackdrop").classList.add("hidden");
}

// Listen for button click to open the modal
const modalButtons = document.querySelectorAll("[data-modal-toggle]");
modalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

// Example: Close the modal when a button inside the modal is clicked
const closeModalElement = document.getElementById('closeModalButton');
if (closeModalElement) {
  closeModalElement.addEventListener('closeModalButton', closeModal);
}
// document
//   .getElementById("closeModalButton")
//   .addEventListener("click", closeModal);
