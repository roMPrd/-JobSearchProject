import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="offer-zoom"
export default class extends Controller {
  static targets = [ "selectOffer" ]

  connect() {
    this.offerBox = document.getElementById("offer-info-box");
    this.offerBox.innerHTML = "<p>Select an offer !</p>";
  }

  zoom() {
    console.log("hello from zoom controller")
    console.log(this.selectOfferTargets)
    this.offerBox.innerHTML = " ";
    this.selectOfferTargets.forEach((offer) => {
      this.offerBox.insertAdjacentHTML("beforeend",
       offer.outerHTML);
    })
  }

}
