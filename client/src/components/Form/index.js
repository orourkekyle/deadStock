import React from "react";
import './style.css';

export function Input(props) {
    return (
        <div className="form-group">
            <input {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn btn-dark">
            {props.children}
        </button>
    )
}