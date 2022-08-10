/** 
 * Cear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas, poder modificarlo
*/ 

import React, { useState } from "react";

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorIncial = 0;

    // Valor inical para una persona
    const personaInicial = {
        nombre: 'Ezequiel',
        email: 'ezequiel91@hotmail.com'
    }
/**
 * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
 * parte del estado de componente para asi poder gestionar si cambio
 * y que este se vea reflejado en la vista del componente.
 * 
 * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
 */

const [contador, setContador] = useState(valorIncial);
const [persona, setPersona] = useState(personaInicial);

/**
 * Funcion para actualizar el estado privado que contiene el cntador 
 */
function incrementarContador(){
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1)
}
/**
 * Funcion para actualizar el estado de persona en el componente
 */
function actualizarPersona(){
    setPersona(
        {
            nombre: 'Hector',
            email: 'popo@hotmail.com'
        }
    )
}

    return ( 
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* bloque de botones para actualizaar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>


        </div>
    );
} 

export default Ejemplo1;