

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}


let persona = { nombre: "Eze", apellido: "Moran"}

saludarPersona(persona)

function saludarPersona(objeto) { 
    objeto.apellido = "Martinez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)}


//FUNCION FLECHA

const array = [1,2,3,10,5,6];

const dobleDelValor = valor => valor * 2;

const array2 = array.map(dobleDelValor);