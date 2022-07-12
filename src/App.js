import React, { Component } from "react";
import "./App.css";
import Morango from "./img/morango.jpg"

class App extends Component{
    state = {
        nome: "Francisca",
        idade: 28,
        comida: "batata frita",
        musicas: [ "Outra vida - Armandinho", "Never be the same - Camila Cabello", "A balada de Tim Bernardes - Tim Bernardes"]
    }

    render(){
        return(
            <>
            <main>
            <h1>Meu nome é {this.state.nome}</h1>
            <h2>Tenho {this.state.idade} anos</h2>
            <h3>Minha comida favorita é {this.state.comida}</h3>
            <h3>Minhas músicas favoritas atualmente são:</h3>
            <ul>
                <li>{this.state.musicas[0]}</li>
                <li>{this.state.musicas[1]}</li>
                <li>{this.state.musicas[2]}</li>
            </ul>
            <figure>
                <img src={Morango} alt="Morango" />
            </figure>
            </main>
            </>
        )
    }
}

export default App;