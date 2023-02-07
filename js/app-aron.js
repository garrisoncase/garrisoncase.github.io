"use strict"

const container = document.querySelector(".container")
const attributes = [
  { name: "Hitpoints: " }
]

const showAttributes = () => {
    let output = ""
    attributes.forEach(
      ({ name }) =>
        (output += `
                <div class="card">
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
document.addEventListener("DOMContentLoaded", showAttributes)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
    navigator.serviceWorker
        .register("js/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}

