//Fecha actual
const fecha = new Date()
console.log(fecha)

//Mi fecha de nacimiento
const fecha2 = new Date("Mayo 12, 1991 13:05:00");
console.log(fecha2)

//Mas tarde
console.log(fecha >  fecha2)

//Dia
const nacimiento = fecha2.getDate();
console.log(nacimiento);

//Mes
const mesNacimiento = fecha2.getMonth() + 1;
console.log(mesNacimiento);

//Año
const añoNacimiento = fecha2.getFullYear();
console.log(añoNacimiento);