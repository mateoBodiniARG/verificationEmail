const parrafo1 = document.getElementById('parrafo') //llamar por ID
const parrafo2 = document.querySelector('.class') // llamar por clase o id, cuando se trata de id es mas optimo usar getelementbyid



// MODIFICAR STYLE CSS DESDE JS
// EJEMPLO :

const titulo = document.getElementById(".titulo")
titulo.style.backgroundColor = "#34da"
titulo.style.padding = "30px"


//Clases, classList y metodos de classlist

titulo.classList.add("grande") // Al elemento seleccionado 'titulo' se le agrega la clase "Grande"
titulo.classList.remove("grande") // Al elemento seleccionado 'titulo' se le ELIMINA la clase "Grande"
titulo.classList.item("0") // Obtener la primera clase de un elemento
titulo.classList.contains("grande") //¿Un elemento tiene una clase "grande"?
titulo.classList.replace("grande", "chico") // Remplaza la clase "grande" por la clase "chico"
titulo.classList.toggle("hola"); // Activa y desactiva "hola":


// Obtencion y Modificacion de elementos 
let resultado1 = titulo.textContent // Devuelve el contenido de texto 
let resultado2 = titulo.innerHTML  // Devuelve el contenido del texto con las etiquetas HTML
