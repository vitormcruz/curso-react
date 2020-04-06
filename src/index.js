import ReactDom from 'react-dom'
import React from "react";
import PrimeiroComponente from './componentes/PrimeiroComponente'

const root = document.getElementById("root");

ReactDom.render(
    <div><h1>Olá React</h1>
        <PrimeiroComponente/>
        <PrimeiroComponente/>
    </div>,
    root);
