import React, {Component} from "react";
import "./Calculadora.css"
import Botao from "../componentes/Botao";
import Display from "../componentes/Display";

export default class Calculator extends Component {

    clearMemory = () =>{
        console.log('limpar')
    }

    setOperation = (operation) =>{
        console.log(operation)
    }

    addDigit = (n) =>{
        console.log(n)
    }

    render = () => {
        return (
            <div className="calculadora">
                <Display value={100}/>
                <Botao label="AC" triple click={this.clearMemory}/>
                <Botao label="/" operation click={this.setOperation}/>
                <Botao label="7" click={this.addDigit}/>
                <Botao label="8" click={this.addDigit}/>
                <Botao label="9" click={this.addDigit}/>
                <Botao label="*" operation click={this.setOperation}/>
                <Botao label="4" click={this.addDigit}/>
                <Botao label="5" click={this.addDigit}/>
                <Botao label="6" click={this.addDigit}/>
                <Botao label="-" operation click={this.setOperation}/>
                <Botao label="1" click={this.addDigit}/>
                <Botao label="2" click={this.addDigit}/>
                <Botao label="3" click={this.addDigit}/>
                <Botao label="+" operation click={this.setOperation}/>
                <Botao label="0" double click={this.addDigit}/>
                <Botao label="." click={this.addDigit}/>
                <Botao label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}