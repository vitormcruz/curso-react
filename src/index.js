import ReactDom from 'react-dom';
import React from "react";
import PrimeiroComponente from './componentes/PrimeiroComponente';
import {CompA, CompB} from './componentes/DoisComponentes';
import Multi from './componentes/MultiElementos';
import FamiliaSilva from "./componentes/FamiliaSilva";
import Familia from "./componentes/Familia"
import Membro from "./componentes/Membro";
import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
import Pai from "./componentes/Pai";
import ComponenteClasse from "./componentes/ComponenteClasse";

const root = document.getElementById("root");

ReactDom.render(
    <div><h1>Olá React</h1>
        <PrimeiroComponente valor="Bom dia!" aBcD={2**8}/>
        <PrimeiroComponente valor="Boa Noite!"/>
        <CompA valor="Olá eu sou A"/>
        <CompB valor="B na área"/>
        <Multi/>
        <FamiliaSilva/>
        <br/>

        <Familia sobrenome="Medina">
                <Membro nome="Vitor"/>
                <Membro nome="Sofia"/>
                <Membro nome="Heloísa"/>
        </Familia>

        <ComponenteComFuncao/>

        <Pai/>

        <ComponenteClasse valor="Sou um componente de Classe"/>

    </div>,
    root);
