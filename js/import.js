// Listen for button click to open the modal
const importGetModal = document.getElementById("importModal");
const openImportModal = document.querySelector('[data-modal-toggle="importModal"]');
openImportModal.addEventListener("click", openModalImport);

// JavaScript code to open the modal and backdrop
function openModalImport() {
    document.getElementById("importModal").classList.remove("hidden");
    const code = editor.getHtml();
    const importCodePopup = document.getElementById('importCode');
    importCodePopup.innerText = code; 
}

const closeImportModal = document.querySelectorAll('[data-modal-hide="importModal"]');

closeImportModal.forEach((button) => {
    button.addEventListener("click", closeModalImportCode);
});

function closeModalImportCode() {
  document.getElementById("importModal").classList.add("hidden");
}

// Event listener to close the modal when clicking outside the modal
importGetModal.addEventListener("click", (event) => {
    if (event.target === importGetModal) {
        closeModalImportCode();
    }
});