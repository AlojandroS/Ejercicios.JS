//Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con la clase .pokemon


const allClasePokemon = document.querySelectorAll('.pokemon')

for (let i = 0; i < allClasePokemon.length; i++){

    console.log(allClasePokemon[i].innerHTML);
}

