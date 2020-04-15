import React from "react";
import "./Botao.css";

export default props =>
    <button onClick={(() => props.click && props.click(props.label))}
            className={'button ' + (props.triple ? 'triple ': '') +
                                   (props.double ? 'double ': '') +
                                   (props.operation ? 'operation ': '')}>
        {props.label}
    </button>