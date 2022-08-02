const persona = {
    nombre: "Chelo",
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log('Hello')
    }
}

// console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function() {
        console.log('Hello')
    }
}

otra_persona.saludo()

// Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre, //tambien lo puedo definir como nombre, 
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function() {
            console.log("Hola")
        }
    }
}
const nueva_persona = creaPersona ("Eze", 31, true)
console.log(nueva_persona)