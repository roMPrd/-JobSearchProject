import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="offer-zoom"
export default class extends Controller {
  static targets = [ "selectOffer" ]

  connect() {
    this.offerBox = document.getElementById("offer-info-box");
    this.offerBox.innerHTML = "<p>Select an offer !</p>";
  }

  zoom() {
    // console.log(this.element)
    // console.log("hello from zoom controller")
    console.log(this.selectOfferTargets)

    // get the right container
    const rightContainer = document.getElementById("offer-info-box");
    //get the modal container
    const modalContainer = document.getElementById("modal-add-edit")
    // toggle hidden class for right container or empty modal
    if (rightContainer.classList.contains("hidden-container")) {
      rightContainer.classList.remove("hidden-container");
      modalContainer.classList.add("hidden-container");
    }

    //remove background gradient class from all offers and add background white class+
    document.querySelectorAll(".offer-card-item-background").forEach((offer) => {
      offer.classList.remove("background-gradient");
      offer.classList.add("background-white");
    })
    //add background gradient class to selected offer
    this.element.classList.remove("background-white");
    this.element.classList.add("background-gradient");
    //empty offer box
    this.offerBox.innerHTML = "";
    //render selected offer in offer box
    this.selectOfferTargets.forEach((offer) => {
      this.offerBox.insertAdjacentHTML("beforeend",
       offer.outerHTML);
    })
  }

  moveSelectedOffer() {
    // TODO: or not xD
  }


}
