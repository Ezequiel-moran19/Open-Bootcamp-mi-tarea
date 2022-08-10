import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componente de tipo clase

class Greeting extends Component {

    constructor(props){
        super(props); 
         // Las props es informacion que le voy a pasar por atributo 
        this.state = {
        // El state es informacion privada del componente que sirve para hacer gestion internamente, hacer logica etc..
          age: 31
       }
    }

    render() {
        return (
            <div>
                <h1>
                     ¡HOLA { this.props.name }!
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    //Fucion que nos permite cambiar el estado que por ahora es inmutable
    birthday = () => {
      this.setState((prevState) => (  // prevState es el estado previo
          {
             age: prevState.age +1
          }
        ))
    }

}

Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;

/*
Históricamente, un componente de clase se diferencía de un componente funcional en dos principales cosas:
La capacidad de administrar un estado propio del componente y la exposición de métodos que pueden ejecutar funcionalidad personalizada en distintas etapas del ciclo de vida de un componente.
Necesita el setState para actualizar el estado del componente y poder renderizar de nuevo los cambios en la vista
*/ 