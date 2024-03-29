import React, { useState } from 'react'

// Definiendo estilos enconstantes:

// ? Estilos para usuario logueado
const loggedStyle = {
    color: 'white'
}

// ? estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

  // Generamos un estado para el componente
  // y asi controlar si el usuario esta o no logueado
  const [logged, setLogged] = useState(false)

  const greetingUsuer = () => (<p>Hola, {props.name}</p>);
  const pleaseLogin = () => (<p>Please login</p>);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
       { logged ? 
       greetingUsuer() 
       : 
       pleaseLogin()
       }
       <button onClick={() => {
        console.log('Boton pulsado');
        setLogged(!logged);
       }}>
        { logged ? 'Logout' : 'Login' }
       </button>
    </div>
  )
}

export default GreetingStyled