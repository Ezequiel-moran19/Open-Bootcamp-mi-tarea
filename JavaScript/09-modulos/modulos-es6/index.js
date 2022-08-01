// import { suma, eleva, nombre } from './modulos/matematicas.js'
import * as moduloMatematicas from './modulo/mate.js'
import getAutor, { libro } from './modulo/literatura.js'

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 21)
console.log(potencia)

//console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(libro)