import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/form/greetingStyled';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {/* Componente propio Greeting.jsx */}
         {/* <Greeting name="Ezequiel"></Greeting> */}
         {/* Componente de ejemplo funcional */}
         {/* <GreetingF name="Ezequiel"></GreetingF> */}
         {/* Componente de Lista de Tareas */}
         {/* <TaskListComponent></TaskListComponent> */}
         {/* <Ejemplo1></Ejemplo1> */} 
         {/* <Ejemplo2></Ejemplo2> */} 
         {/* <MiComponenteConContexto></MiComponenteConContexto> */}
         {/* Todo lo que hay aqui, es tratado como props.children */}
         {/* <Ejemplo4 nombre="Ian">
           <h3>
            Contenido del props.children
           </h3>
         </Ejemplo4> */}
         <GreetingStyled name="Ezequiel"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
