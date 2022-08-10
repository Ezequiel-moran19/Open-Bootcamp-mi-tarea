import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Componente de tipo funciones(funcionales)

const GreetingF = (props) => {

    // useState es una funcion que permite crear un estado privado para este componente de tipo funcion 
    //const  [variable, metodo para actualizarlo] = useState(valor inicial) como valor icluso podriamos pasarle un objeto o lo que sea
    const [age, setage] = useState(31)
    
    const birthday = () => {
        //Actualizamos el State
        setage(age + 1);
    }

    return (
        <div>
            <h1>
                ¡HOLA { props.name } desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>  
        </div>
    );
};


GreetingF.propTypes = {
   name: PropTypes.string
};


export default GreetingF;

/*
los componentes funcionales homologaron la funcionalidad de los componentes de clase
en que ahora también pueden guardar un estado y ejecutar métodos del ciclo de vida de un componente.
no ahorra el trabajo de generar clases
*/
