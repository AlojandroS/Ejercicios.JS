//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".


const elementosData = document.querySelectorAll('[data-function="testMe"]');



for (let i = 0; i < elementosData.length; i++) {
  console.log(elementosData[i].innerHTML);
}
