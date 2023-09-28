// JavaScript code to select and upload image
const fileUploadButton = document.getElementById("fileUploadButton");
const selectedFileName = document.getElementById("selectedFileName");
const errorText = document.getElementById("errorText");

// Create a hidden input element to handle file selection
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = ".jpg, .jpeg, .gif, .png, .svg"; // Specify accepted file types

// Listen for button click and trigger file input click
fileUploadButton.addEventListener("click", () => {
  fileInput.click();
});

// Listen for file selection and update the selected file name
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    // Validate file size (in bytes)
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSizeInBytes) {
      errorText.textContent =
        "File size exceeds the maximum allowed size (2MB).";
      selectedFileName.textContent = "";
      return;
    }

    selectedFileName.textContent = `Selected File: ${file.name}`;
    errorText.textContent = "";
  } else {
    selectedFileName.textContent = "";
    errorText.textContent = "";
  }
});
