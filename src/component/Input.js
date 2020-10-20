import React from "react";

function Input(props){
    return <div className='input'>{props.input}</div>
}

function ClearButton (props){
    return <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
}

export default Input;