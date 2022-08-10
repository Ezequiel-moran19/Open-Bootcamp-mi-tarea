/**
 * Ejemplo de uso del metodo compontEillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
   
    componentWillUnmount(){
        console.log('Componente antes de que el componente desaparezca')
    }
   
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        // Aca no ponemos nada
        return () => {
            console.log('Componente antes de que el componente desaparezca')
        };
    }, []);

    return (
    <div>
       <h1>WillUnmount</h1>
    </div>
  )
}


