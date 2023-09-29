// Add a click event handler for the save editor
document.getElementById("save-button").addEventListener("click", function () {
  editor.store();
  alert("Data saved !");
});
