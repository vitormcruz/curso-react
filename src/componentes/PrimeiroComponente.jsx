import React from "react";

export default (props) =>
        <div>
            <h1>{props.valor}</h1>
            <h2>{props.aBcD === undefined ? 'aBcD não definido' : props.aBcD}</h2>
        </div>
