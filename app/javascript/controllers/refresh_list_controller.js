import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="refresh-list"
export default class extends Controller {
  static targets = [ "form", "list", "searchInput", "formSubmit" ]
  connect() {
    console.log("hello from refresh-list controller")
  }


  update() {
    console.log(this.formTarget.action)
    const url = `${this.formTarget.action}?query=${this.searchInputTarget.value}`
    fetch(url, { headers: { 'Accept': "text/plain" } })
    .then(response => response.text())
    .then((data) => {
      this.listTarget.outerHTML = data;
    })
  }

  checkSubmit() {
    console.log("hello from checkSubmit")
    console.log(this.formSubmitTarget.action)
    // get url /offers
    const url = `${this.formSubmitTarget.action}`
    // refresh list
    const refreshList = async () => {
      fetch(url, { headers: { 'Accept': "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        document.getElementById("offer-list-modal").outerHTML = data;}
      )
    }

    setTimeout(refreshList, 1000);
  }

}
