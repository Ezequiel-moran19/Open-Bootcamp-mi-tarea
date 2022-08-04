//localStorage.getItem("nombre", "Ezequiel")


 console.log(localStorage.getItem("nombre"))

 localStorage.setItem("persona", JSON.stringify({ nombre: "gorka", edad: 32 }))

 console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

//localStorage.removeItem("nombre") 

//sessionStorage.setItem("nombre-sesion", "Gorka")

/* Cookies */

//document.cookie = "nombreCookie=GorkaCookie"

//document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

//console.log(document.cookie)


/*
Crea un nuevo proyecto de Node

- Crea un fichero index.html (utiliza el comando "!")

- Crea un fichero index.js

- Integra el fichero index.js en el html

- En el fichero index.js:

- Crea una variable con tu nombre

- Crea una variable con tu apellido

- Crea un objeto con tu nombre y tu apellido

- Almacena el objeto anterior en la SessionStorage

- Almacena el objeto anterior en la LocalStorage

- Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

- Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

- Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

- Observa cómo la SessionStorage está vacía

- Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

- Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado*/ 