// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
const simulateClickButton = document.querySelector("#simulate-click")
const submitButton = document.querySelector("#submit")

document.addEventListener("DOMContentLoaded", () => {
  simulateClickButton.addEventListener("click", () => {
    simulateClick('dynamic-content','The Button has been clicked')
  })
  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    handleFormSubmit()
  })
})
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function simulateClick(elementId, message) {
  addElementToDOM(elementId, message)
}

function addElementToDOM(elementId, message) {
  const element = document.getElementById(elementId)
  const errorMessage = document.getElementById('error-message')
  if(element){
    element.textContent = message
    if(errorMessage){
      errorMessage.classList.add('hidden')
    }
  } else {
    if(errorMessage){
      errorMessage.textContent = `Error: Element with ID ${elementId} does not exist`
      errorMessage.classList.remove('hidden')
    }
  } 
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  element.remove()
}

function handleFormSubmit(event) {
  const input = document.querySelector("#user-input")
  const content = document.getElementById('dynamic-content')
  const errorMessage = document.getElementById('error-message')
  if(input.value === "" || input.value.length === 0){
    if(errorMessage){
      errorMessage.textContent = "Input cannot be empty"
      errorMessage.classList.remove('hidden')
    }
  } else {
    content.textContent = input.value
    if(errorMessage){
      errorMessage.classList.add('hidden')
    }
  }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
module.exports = {simulateClick,addElementToDOM,removeElementFromDOM, handleFormSubmit}