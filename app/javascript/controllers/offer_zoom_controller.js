import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="offer-zoom"
export default class extends Controller {
  static targets = [ "selectOffer" ]

  connect() {
    this.offerBox = document.getElementById("offer-info-box");
    this.offerBox.innerHTML = "<p>Select an offer !</p>";
  }

  zoom() {
    console.log(this.element)
    console.log("hello from zoom controller")
    console.log(this.selectOfferTargets)
    //remove move class from all offers
    document.querySelectorAll(".offer-card-item").forEach((offer) => {
      offer.classList.remove("red");
    })
    //add move class to selected offer
    this.element.classList.add("red");
    //empty offer box
    this.offerBox.innerHTML = " ";
    //render selected offer in offer box
    this.selectOfferTargets.forEach((offer) => {
      this.offerBox.insertAdjacentHTML("beforeend",
       offer.outerHTML);
    })
  }

  moveSelectedOffer() {

  }


}
