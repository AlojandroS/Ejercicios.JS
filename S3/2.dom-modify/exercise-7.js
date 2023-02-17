//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me


const pDelete = document.querySelectorAll('.fn-remove-me')


for(const p of pDelete){
    p.remove()
    
}

