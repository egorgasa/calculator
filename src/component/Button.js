import React from "react";

function Button(props){
    const isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    };
    return <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
                onClick={()=>props.handle(props.children)}>{props.children}</div>
}
export default Button;