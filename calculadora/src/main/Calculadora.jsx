import React, {Component} from "react";
import "./Calculadora.css"
import Botao from "../componentes/Botao";
import Display from "../componentes/Display";

const initialState = {
    displayValue: '0',
    operation: null,
    values: [null, null],
    current: 0,
    limpa: false
}

export default class Calculator extends Component {

    state = {...initialState};

    clearMemory = () =>{
        this.setState({...initialState});
    }

    setOperation = (operation) =>{
        let values = this.executaOperation(operation, [...this.state.values]);
        let current = 1;
        let displayValue = this.state.displayValue;
        if (operation === '='){
            operation = null;
            displayValue = values[0];
            current = 0;
        }

        this.setState({current, operation, displayValue, values, limpa: true});
    }

    executaOperation = (newOperation, values) => {
        if(values[1] === null) return values;
        values[0] =  eval(`${values[0]} ${this.state.operation} ${values[1]}`);
        if (newOperation === '='){
            values[1] = null;
        }

        return values;
    }

    addDigit = (n) => {
        if( n === '.' && this.state.displayValue.includes('.')) return;

        let displayValue = this.state.displayValue === '0' ||this.state.limpa  ?
                            '' : this.state.displayValue;
        displayValue = displayValue + n;

        let values = [...this.state.values];
        values[this.state.current] = Number(displayValue);
        console.log(values);
        this.setState({ displayValue, values, limpa: false });
    }

    render = () => {
        return (
            <div className="calculadora">
                <Display value={this.state.displayValue}/>
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