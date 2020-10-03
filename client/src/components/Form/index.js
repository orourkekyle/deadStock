import React from "react";
import './style.css';

export function Input(props) {
    return (

        <div className="form-group" style={{fontFamily: "Courier New", fontWeight: "light", fontStyle: 'oblique', borderColor: 'green', borderStyle: 'groove', borderWidth: '3px'}}>
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