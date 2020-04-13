import React, { Component } from "react";

export default class Contador extends Component {
    state = {
        numero: 0
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        );
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1});
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1});
    }

}