// ARMAMOS LAS TABLAS DE MULTIPLICACION

// (2)
function tablaDelDos(){
    let tablaDeDos = [];
     for(let i = 0; i < 11; i++)
     {
       tablaDeDos.push(2 * i);
     }
     return tablaDeDos; 
   }
   // (3)
   function tablaDelTres(){
    let tablaDelTres = [];
     for(let i = 0; i < 11; i++)
     {
       tablaDelTres.push(3 * i);
     }
     return tablaDelTres; 
   }
   // (4)
   function tablaDelCuatro(){
    let tablaDelCuatro = [];
     for(let i = 0; i < 11; i++)
     {
        tablaDelCuatro.push(4 * i);
     }
     return tablaDelCuatro; 
   }
   // (5)
   function tablaDelCinco(){
    let tablaDelCinco = [];
     for(let i = 0; i < 11; i++)
     {
        tablaDelCinco.push(5 * i);
     }
     return tablaDelCinco; 
   }
   // (6)
   function tablaDelSeis(){
    let tablaDelSeis = [];
     for(let i = 0; i < 11; i++)
     {
        tablaDelSeis.push(6 * i);
     }
     return tablaDelSeis; 
   }
   // 7)
   function tablaDelSiete(){
    let tablaDelSiete = [];
     for(let i = 0; i < 11; i++)
     {
        tablaDelSiete.push(7 * i);
     }
     return tablaDelSiete; 
   }
   // 8)
   function tablaDelOcho(){
    let tablaDelOcho = [];
     for(let i = 0; i < 11; i++)
     {
       tablaDelOcho.push(8 * i);
     }
     return tablaDelOcho; 
   }
   // (9)
   function tablaDelNueve(){
    let tablaDelNueve = [];
     for(let i = 0; i < 11; i++)
     {
       tablaDelNueve.push(9 * i);
     }
     return tablaDelNueve; 
   }
   
   //Promedio
function ArrayAvg() {
    let summ = 0;
    let myArray=[5, 8, 10, 20];
  
    for (var i = 0;i < myArray.length; i++) {
        summ = summ + myArray[i];
    }
    return summ / myArray.length;
  }
  
function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento,
    // simplemente devuélvelo
  
    let producto = 1;
    if (arguments.length === 0){return 0;} 
    for (let i = 0; i < arguments.length; i ++)
    {
        producto = producto * arguments[i];
    }
    return producto;
  }
  