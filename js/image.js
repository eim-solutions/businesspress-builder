// JavaScript code to select and upload multiple images
const fileUploadButton = document.getElementById("fileUploadButton");
const selectedFileName = document.getElementById("selectedFileName");
const errorText = document.getElementById("errorText");
const dialogContain = document.getElementById("dialogContain");
const dialogContainData = document.getElementById("dialogContainData");
const removeImageButton = document.getElementById("removeImageButton");

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

      // Add a click event listener to select the image
      imageElement.addEventListener("click", () => {
        // Remove the 'selected' class from previously selected images (if any)
        const selectedImages = document.querySelectorAll(".selected");
        selectedImages.forEach((selected) => {
          selected.classList.remove("selected");
        });

        // Add the 'selected' class to the clicked image
        imageElement.classList.add("selected");
        // Make the "Remove Selected Image" button visible
        removeImageButton.classList.remove("hidden");
      });

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

// Function to remove the selected image
removeImageButton.addEventListener("click", () => {
  // Check if there is a selected image (i.e., an image with a 'selected' class)
  const selectedImage = document.querySelector(".selected");

  if (selectedImage) {
    // Remove the selected image container from dialogContainData
    dialogContainData.removeChild(selectedImage.parentElement);
    // Update the selected file count
    selectedFileName.textContent = `Selected Files: ${dialogContainData.children.length}`;
    // Hide the "Remove Selected Image" button
    removeImageButton.classList.add("hidden");
  }
});

// JavaScript code to open the modal and backdrop
function openFileModal() {
  document.getElementById("fileUploadModal").classList.remove("hidden");
  document.getElementById("modalBackdrop").classList.remove("hidden");
  showUploadModal(); // Show Modal body 1 initially
}

// Listen for button click to open the modal
const openModalButton = document.querySelector(
  '[data-modal-toggle="fileUploadModal"]'
);
openModalButton.addEventListener("click", openFileModal);

const fileGetModal = document.getElementById("fileUploadModal");
const closeModalButtons = document.querySelectorAll(
  '[data-modal-hide="fileUploadModal"]'
);

// Event listeners to close the modal when close buttons are clicked
closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeFileModal);
});

// Event listener to close the modal when clicking outside the modal
fileGetModal.addEventListener("click", (event) => {
  if (event.target === fileGetModal) {
    closeFileModal();
  }
});

// JavaScript code to close the modal and backdrop
function closeFileModal() {
  document.getElementById("fileUploadModal").classList.add("hidden");
  document.getElementById("modalBackdrop").classList.add("hidden");
}




document.getElementById("selectImages").addEventListener("click", () => {
  const selectedImageData = document.getElementById("displayImages");
  // Get a reference to the dialogContainData div
  const dialogContainData = document.getElementById("dialogContainData");

  // Get all the image elements within dialogContainData
  const imageElements = dialogContainData.querySelectorAll("img");

  // Loop through the image elements
  imageElements.forEach((file) => {
    const imageContainer = document.createElement("div");
    imageContainer.className =
      "bg-extraLightGray p-2 rounded-md flex items-center gap-2";

    const imageDiv = document.createElement("div");
    imageDiv.className = "w-2/6";

    const imageElement = document.createElement("img");
    imageElement.className = "mx-auto my-0";
    imageElement.src = file.getAttribute("src");
    imageElement.alt = file.getAttribute("alt");

    const imageNameDiv = document.createElement("div");
    imageNameDiv.className = "text-sm text-blue-900";
    imageNameDiv.textContent = file.alt;

    imageDiv.appendChild(imageElement);
    imageContainer.appendChild(imageDiv);
    imageContainer.appendChild(imageNameDiv);
    selectedImageData.appendChild(imageContainer);
  });
});