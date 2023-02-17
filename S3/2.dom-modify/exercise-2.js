//Inserta dinamicamente en un html un div que contenga una p con javascript.

const body = document.querySelector('body')
const div = document.createElement("div")
const p = document.createElement("p")


body.appendChild(div)
div.appendChild(p)

