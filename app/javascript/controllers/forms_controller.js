import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="forms"
export default class extends Controller {
  static values = { field: String }

  connect() {
    // console.log("hello from forms controller")
  }

  toggleField() {
    // console.log("hello from toggleField")
    // console.log(this.fieldValue)
    //select all fields
    const fields = document.querySelectorAll('.field')
    // console.log(fields)
    //loop through fields, put active on the element clicked and remove from others
    fields.forEach((field) => {
      field.classList.contains(this.fieldValue) ? field.classList.add('active') : field.classList.remove('active')
    })


  }
}
