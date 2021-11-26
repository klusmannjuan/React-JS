import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes 
import Micomponente from './components/Micomponente';

function HolaMundo(nombre, edad){
  var presentacion = (
  <div>
  <h2>Hola, Soy {nombre}</h2>
  <h3>Tengo {edad} años</h3>
  </div>
  );

  return presentacion;
  
}

  

function App() {
  var nombre = "Juan";
  

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, bienvenido al curso de React 
        </p>

        {HolaMundo(nombre, 22)}
        
        <section className="componentes">

        <Micomponente />

      </section>
          
      </header>
      
      </div>
  );
}

export default App;
