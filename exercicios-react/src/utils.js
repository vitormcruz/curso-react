import React from "react";

export function filhosComProp(props) {
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, {sobrenome: props.sobrenome});
    })
}