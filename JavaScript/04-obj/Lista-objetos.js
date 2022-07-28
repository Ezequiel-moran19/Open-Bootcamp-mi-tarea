

const listaObjetos = [
    {nombre: "Ezequiel", edad: 31},
    {nombre: "Ian", edad: 25},
    {nombre: "Naty", edad: 40},
    {nombre: "Nora", edad: 20},
    {nombre: "Brisa", edad: 50}
];

/*const personasMayores = listaObjetos.filter(obj => {
    if(obj.edad > 26)
    {
        return true
    } else {
        return false
    }
})*/
const personasMayores = listaObjetos.filter(obj => obj.edad > 35)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Brisa")

console.log(nuevaLista);