import React, {Component} from "react";

class Micomponente extends Component{

render(){

    let receta = {
        nombre: 'Pizza',
        ingredientes: ['tomate', 'Queso', 'Jamon'],
        calorias: 400
    };

    return(
        <div className="mi-componente">
            <h1> {'Receta: ' + receta.nombre} </h1>
            <h2> {'Calorias: ' + receta.calorias} </h2>
            <ol>
                {

                    receta.ingredientes.map((ingrediente, i) => {
                        console.log(ingrediente);
                        return(
                            <li key={i}>
                                {ingrediente}
                            </li>
                    );
                })  
                    
                }  
            </ol>
            <hr/>
        </div>
        
    );
}

}

export default Micomponente;