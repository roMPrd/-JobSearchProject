import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modals"
export default class extends Controller {
  connect() {
  }
  toggleContainers() {
    // get the right container
    const rightContainer = document.getElementById("holder-container-right");
    // hide right container
    rightContainer.classList.add("hidden-container");

    //get container modal and add class
    document.getElementById("modal-add-edit").classList.remove("hidden-container");

    // toggle hidden class for right container or empty modal
    // if (rightContainer.classList.contains("hidden-container")) {
    //   rightContainer.classList.remove("hidden-container");
    // } else { rightContainer.classList.add("hidden-container");
    //   const modal = document.getElementById("modal");
    //   modal.innerHTML = "";
    //   modal.removeAttribute("complete");
    //   modal.removeAttribute("src");
    // }
  }

  closeModal() {
    // prevent refresh
    // event.preventDefault();

    // get the left container
    const rightContainer = document.getElementById("offer-info-box");
    // toggle hidden class for right container
    rightContainer.classList.remove("hidden-container");

    // get modal
    const modal = document.getElementById("modal");
    // empty modal
    modal.innerHTML = "";
    //get container modal and remove class
    document.getElementById("modal-add-edit").classList.add("hidden-container");
    // modal.classList.remove("index-offer-container-right");



    // remove the src attribute from the modal
    modal.removeAttribute("src");

    // remove complete attribute from the modal
    modal.removeAttribute("complete");
  }
}
