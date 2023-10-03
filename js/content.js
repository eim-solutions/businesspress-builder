// Get references to the editor and content elements
const content = document.getElementById("content-values");

// Function to check if the value contains HTML tags
function containsHTMLTags(value) {
  const div = document.createElement("div");
  div.innerHTML = value;
  return div.getElementsByTagName("*").length > 0;
}

// Function to set the content value based on the selected component's inner HTML
function setContentValue(selectedComponent) {
  if (selectedComponent) {
    const innerHTML = selectedComponent.view.el.innerHTML;
    if (!containsHTMLTags(innerHTML) && innerHTML) {
      content.value = innerHTML;
      content.removeAttribute("disabled"); // Enable the content
    } else {
      content.value = ""; // Clear the content if innerHTML contains HTML tags
      content.setAttribute("disabled", "true"); // Disable the content
    }
  } else {
    content.value = ""; // Clear the content if no component is selected
    content.setAttribute("disabled", "true"); // Disable the content
  }
}

// Function to apply the content value to the selected component's inner HTML
function applyContentValue(selectedComponent) {
  if (selectedComponent) {
    const componentEl = selectedComponent.getEl();
    const newInnerHTML = content.value;
    const innerHTML = selectedComponent.view.el.innerHTML;

    // Update the content of the selected component's element
    if (!containsHTMLTags(innerHTML)) {
      componentEl.innerHTML = newInnerHTML;
      editor.store(); // Save the changes
      editor.Modal.close();
    }
  }
}

// Listen for the 'component:selected' event in GrapesJS
editor.on("component:selected", (selectedComponent) => {
  setContentValue(selectedComponent);
});

// Listen for changes in the content
content.addEventListener("input", () => {
  applyContentValue(editor.getSelected());
});

// Initialize the content value based on the initially selected component (if any)
setContentValue(editor.getSelected());
