import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modals"
export default class extends Controller {
  connect() {
  }

  closeModal(event) {
    // prevent refresh
    // event.preventDefault();
    // remove modal
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";

    // remove the src attribute from the modal
    // modal.removeAttribute("src");

    // remove complete attribute from the modal
    // modal.removeAttribute("complete");
  }
}
