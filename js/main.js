const container = document.querySelector(".container");

//crear un elemento html
const parrfo = document.createElement("p");

// texto parrafo
const textParrafo = document.createTextNode("Mi Parrafo");

//añadiendo el texto al parrafo
parrafo.appendChild(textParrafo);

//renderizando en el Dom
container.append(parrafo);