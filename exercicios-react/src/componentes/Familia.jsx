import React from "react";
import {filhosComProp} from "../utils";


export default props =>
    <div>
        <h1>Família</h1>
        {filhosComProp(props)}
    </div>