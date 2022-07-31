/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/ 

function siempreTrue() {
    return true
}

const miPromesa = new Promise (() => {
    setTimeout (function(){
        console.log("Hola soy una promesa")
    }, 3000)
})

console.log(miPromesa)


function* generaldIndice() {
 
    for (let i = 0; i < 100; i = i + 1 * 2) {
   
       console.log(i)
    }    
}
const generador = generaldIndice()

console.log(generador.next().value)
