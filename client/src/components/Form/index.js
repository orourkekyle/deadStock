import React from "react";
import './style.css';

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{  margin: 10 }}>
            {props.children}
        </button>
    )
}