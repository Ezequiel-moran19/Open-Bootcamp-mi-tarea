
const misDatos  = {
    nombre: "Ezequiel",
    apellido: "Moran",
    edad: 31,
    altura: 1.72,
    ocupacion: "desarrollador"
}

const obtenerDatos = misDatos.edad;
console.log(obtenerDatos);

const lista1 = ["Ezequiel", "Moran", 31];
const lista2 = ["Dylan", "Aguirre", 25];
const lista3 = ["Sebelinda", "Parada", 29];
const lista4 =[...lista1, ...lista2,...lista3];
console.log(lista4);

