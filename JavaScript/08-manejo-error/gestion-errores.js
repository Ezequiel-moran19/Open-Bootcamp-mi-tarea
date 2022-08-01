const miFunction = val => {
    if (typeof val === "number") {
        return 2 * val
    }

    throw new Error("El valor debe ser de tipo numero")
}

//const elDoble= miFunction("lalla")

const numero = "8";

try {
    //codigo que puede fallar
    console.log("Se esta ejecutando correctamente")
    const doble = miFunction(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR")
} finally {
    console.log("Esto se va a ejecutar sise produce algun erros, como si no existe ninguno")
}

// InternalError, SyntaxError, TypeError, RangError y ReferenceError
//
//
//