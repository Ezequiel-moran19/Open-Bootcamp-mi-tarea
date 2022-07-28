class App{
   constructor(modelo, puntuacion,peso)
   {
      this.modelo= modelo;
      this.puntuacion= puntuacion;
      this.peso= peso;
      this.iniciado= false;
      this.instalada= false;
   }

   instalar(){
      if(this.instalada == false)
      {
         this.instalada = true;
         alert("App instalada con exito");
      }
   }

   desinstalar(){
    if (this.instalada == true) 
      {
         this.instalada = false;
         alert("App disinstalada correctamente");
      }
    } 

    encender(){
    if (this.iniciado == false && this.instalada == true) 
        {
            this.iniciado = true;
            alert("App encendia");
        }
    }

    apagar(){
    if (this.iniciado == true && this.instalada == true) 
        {
            this.iniciado = false;
            alert("App apagada");
        }
    } 
    appInfo(){
      return ` 
      modelo: <b>${this.modelo}</b><br>
      puntuiacion: <b>${this.puntuacion}</b><br>
      peso: <b>${this.peso}</b><br>
      `
    }
    
}

app = new App ("16.000","5 estrellas","900mb");
app1 = new App ("1.000","4 estrellas","700mb");
app2 = new App ("6.000","5 estrellas","200mb");
app3 = new App ("23.000","4 estrellas","1gb");
app4 = new App ("900","3.4 estrellas","2gb");

document.write(`
  ${app.appInfo()} <br>
  ${app2.appInfo()} <br>
  ${app3.appInfo()} <br>
  ${app4.appInfo()} <br>
  ${app1.appInfo()} <br>
  `);
/*
app.instalar();
app.encender();
app.apagar();
app.desinstalar();
*/

