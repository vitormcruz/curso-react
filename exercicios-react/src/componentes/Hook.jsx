import React, {useState, useEffect} from "react";

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('par')

    useEffect( ()=> {
      contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Ímpar')
    });

    return (
        <div>
            <h1>{contador}</h1>
            <h2>{status}</h2>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
    );
}