import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="forms"
export default class extends Controller {
  static targets = [ "email" ]
  static values = { field: String }
  connect() {
    console.log("hello from forms controller")
  }

  toggleField() {
    console.log("hello from toggleField")
    console.log(this.fieldValue)

  }
}
