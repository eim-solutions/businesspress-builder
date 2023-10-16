// Listen for button click to open the modal
const viewCodeGetModal = document.getElementById("viewCodeModal");
const openViewCodeModal = document.querySelector('[data-modal-toggle="viewCodeModal"]');
openViewCodeModal.addEventListener("click", openModalViewCode);

// JavaScript code to open the modal and backdrop
function openModalViewCode() {
    document.getElementById("viewCodeModal").classList.remove("hidden");
    const code = editor.getHtml();
    const viewCodePopup = document.getElementById('viewcode');
    viewCodePopup.innerText = code; 
}

const closeViewCodeModal = document.querySelectorAll('[data-modal-hide="viewCodeModal"]');

closeViewCodeModal.forEach((button) => {
    button.addEventListener("click", closeModalViewCode);
});

function closeModalViewCode() {
  document.getElementById("viewCodeModal").classList.add("hidden");
}

// Event listener to close the modal when clicking outside the modal
viewCodeGetModal.addEventListener("click", (event) => {
    if (event.target === viewCodeGetModal) {
        closeModalViewCode();
    }
});