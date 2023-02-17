//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const body = document.querySelector('body')
const p = document.createElement('p')

body.appendChild(p)
p.innerHTML = "Soy dinámico"


//console.log(p);