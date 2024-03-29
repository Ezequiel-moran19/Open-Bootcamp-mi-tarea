/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component } from 'react';

export class DidMount extends Component {
    
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }
     
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {
   
   useEffect(() => {
      console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
   }, []);//Cuando dejamos los corchetes vacios se ejecuta una vez y cuando los quitamos se ejecuta siempre 

    return (
      <div>
         <h1>DidMount</h1>
      </div>
    )
  }



