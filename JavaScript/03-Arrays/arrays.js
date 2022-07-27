// FORMAS DE BARRER UN ARRAY
//1) For
function barrerArrayConFor(){

  let array = ['manzana','pera','banana', 8, 4, 6];

  for(let i = 0; i < array.length; i++)
  {
    console.log(array[i]) 
  }
}

//2) map
function barrerArrayConMap(){

  let array = ['ojete','pera','banana', 8, 4, 6];

  const newArray = array.map((index)=> console.log(index));
  //Duvuelve un array llamado newArray
}

//3) do & while
function barrerArrayConDoWhile(){ 

let x = 0;

  do{
   console.log(x) ;
   x++
  }while(x < 3); // devuelve 0,1,2
}

//4) for of
function barrerArrayConForOf(){

  let array = ['ojete','pera', 8, 4, 6];

  for(let i of array)
  {
    console.log(i);//Imprime uno por uno 
  }
}

//5) for in
function barrerArrayConForIn(){

  let aarray = ['ojete','pera', 'mordillo'];
  aarray.salario = '$10000'

  for(let i in aarray)
  {
    console.log(i);//Recorre todas las propiedades y las imprimer
  }// Salida esperada => "0","1","2","salario"
}

//6) For
function barrerArrayConWhile(){

  let mascotas = ['loro','perro','gato'];
  let i = 0;
  while( i < mascotas.length)
  {
    console.log(mascotas[i]) 
    i++
  }
}

//7) ForEach
function barrerArrayConForEach(){

  let familia = ['hermanos','papa','mama'];

  familia.forEach((index) => console.log(index));
  // A diferencia de map no devuelve un array
}
// ESAS FUERON LAS 7 FORMAS DE RECOORER LOS ARREGLOS
/* ============================================================================*/
// OTRAS FORMAS DE UTILIZAR LOS ARRAYS

// Matriz Mostrar
function arrayMatriz(){

  let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ];

   console.log( matrix[0][2] ); // 5, el elemento central
}
// Matriz recorer
function arrayMatrizRecorrer(){

  let matriz = [
  [1, 2, 3],
  [4, 5, 6], 
  [7, 8, 9]];

  for (let i = 0; i < matriz.length; i++) {
     for (let y = 0; y < matriz[i].length; y++) {
        console.log(matriz[i][y]);
    }
  }
}

// Ordenar array de strings
function ordenarArrayString(){
  var arrayStrings = ['Banana', 'World', 'Apple', 'Chocolate']
 console.log(arrayStrings.sort()) // Lo ordena bien
}

function ordenarArrayNumeros(){
   var arrayNumbers = [10, 8, 9, 5, 3, 78, 23]
   console.log(arrayNumbers.sort()) // Lo ordena mal
}

/*==================================================================================*/

function devolverPrimerElemento() {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  let array=["queso",1,2,3,6,5,4,7,8,9];
  return array[0];
}

function devolverUltimoElemento() {
  // Devuelve el último elemento de un array
  let array= [1,2,3,4,5,6,7,89,9, "solo"];
  return array[array.length -1];
}

function obtenerLargoDelArray() {
  // Devuelve el largo de un array
  let array= [1,2,3,4,5,6,7,89,9, "solo"];
  return array.length;
}
//=================================================================//
//Realizado
function incrementarPorUno() {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  let array =[1,2,3,4,5,6];
  let lista = [];
  for(let i = 0; i < array.length; i++) {
    lista[i] = array[i] + 1;
  }
  return lista;
}

function agregarItemAlFinalDelArray() {
  // Añade el "elemento" al final del array
  // y devuelve el array
   let array= [1, 52, "batakis"];
   array.push("elemento");
  return array;
}

function agregarItemAlComienzoDelArray() {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  let array = [2,7];
  array.unshift("elemento");
  return array;
}

function dePalabrasAFrase() {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let palabras=['Hello', 'world!'];
  return palabras.join(" ");
}

function arrayContiene() {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  let array = ["llaa", "elemento", 1, 5];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "elemento") 
    { return true;}
    } return false;
}

function agregarNumeros() {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  let numeros = [4, 8, 10, 15,25];
  let acu = 0;
  for (let i = 0; i < numeros.length; i++) 
  { 
    acu+= numeros[i];
  } 
  return acu;
}

function numeroMasGrande() {
  // Devuelve el número más grande
  var myArray = [1, 5, 6, 2, 3, 100];
  var m = Math.max(...myArray);
  return m;
}


function cuentoElementos(){
  //Realiza una función que retorne la cantidad de los elementos del arreglo
  //cuyo valor es mayor a 18.
  let arreglo=[1, 8, 36, 55, 4, 9];
  let masque = 0 ;
  for (let i=0; i < arreglo.length; i++){
     if (arreglo[i] > 18)
     { masque += 1;}
  }return masque;
}

function empiezaConNueve() {
  //Desarrolle una función que recibe como parámetro un número entero n.
  //Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  let n=[9,2,7,5];
  let numero = n.toString()
  if(numero.charAt(0) === '9')
  { return true;}
  return false;
}

function todosIguales() {
  //Escriba la función todosIguales,
  //que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false. 
  let arreglo = [97, 100, 190, 9];
  for(let i = 0; i < arreglo.length - 1; i++) 
  {
    if(arreglo[i] === arreglo[i+1])
    { return true;}
    else{ return false;} 
  }
} 

function mesesDelAño() {
  //Dado un array que contiene algunos meses del año desordenados,
  //recorrer el array buscando los meses de 
  //"Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    let array = ["Enero", "Marzo","Noviembre", "abril"];
    let newArray = [];
    let cont = 0;
    for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero" 
    || array[i] === "Marzo" 
    || array[i] === "Noviembre"){
      newArray.push(array[i]);
      cont++;}
    }
    if (cont != 3) 
    { return "No se encontraron los meses pedidos"; }
    return newArray;
}

function mayorACien() {
  //La función recibe un array con enteros entre 0 y 200.
  // Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
 
  let prueba = [];
  let array= [1, 55, 88, 105, 158, 44, 160];
  let cont = 0;

  for(var i = 0; i < array.length; i++) 
  {
      if (array[i] > 100) 
      {
          prueba.push(array[i]);
          cont++;
      }
  }
  return prueba;
}

function breakStatement() {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden,
  //debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break
  let i = 0;
  let numero=0;
  let valor = 0;
  let arr = [];
  while(i < 10)
  {
    arr.push(numero+2);
    valor = arr[i];
    if (valor === i) 
    {
      return "Se interrumpió la ejecución";
    }
     numero = valor;
     i++;  
  }
   return arr;
  
}

function continueStatement() {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5,
  // no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  let n = [];
  let numero = [1,2,3,4,5,67,8,94,4,55,22];
  let sum = 0;

  for (let i = 0; i < 11; i++) {
    if (i === 5) 
    {
       continue;
    }
    else{
      sum += 2;
      n.push(sum);
    }
  }
  return n;
}

// Debe devolver un arreglo con solo los strings.
function soloStrings() { 
  // Ej:  soloStrings([1, 'Eze', 2, 'Moran']) debe retornar ['Eze', 'Moran']
  // Utilisamos metodo Filte

  let array=[1, 4 , 'Eze', 10, 'Moran'];

  let a2 = array.filter(function(item) 
  { return typeof item === 'string';})
  return a2; 
}

// devuelve el número entero que mas veces aparece (el más frecuente).
function masFrecuente() {
  
  let masFrecuente= [7,7,3,2,7,3,2,7,3,3,7];
  
  for (var i = 0; i < masFrecuente.length; i++) {
      if (masFrecuente[i+1] === masFrecuente[i]) 
      {
        return masFrecuente[i];
      }    
  }
}

// Dividir el arreglo en subArreglos
function pedazos() {
  // Separa el array recibido en N subarreglos que tengan como máximo el numero recibido en cantidad de elementos.
  // Por ejemplo: pedazos( // pedazos([1,2,3,4,5], 4) -> retorna [[1,2,3,4], [5]); pedazos{[1,2],4) -> retorna [[1,2]];
  
  let array = [1,2,3,4,5];
  let cantidad = 2;// Indica la cantidad del bloques en este caso [1,2,3,4,5], 2) -> retorna [[1,2], [3,4], [5]);
  let aTemporal=[];//Temporal
  let pedacitos;

  for(let i = 0; i < array.length; i+=cantidad) {
       pedacitos = array.slice(i,i+cantidad);
      aTemporal.push(pedacitos);//Guardamos los datos en un nuevo arregrlo
  }
  return aTemporal;
}
