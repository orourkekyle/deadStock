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
        <button {...props} color="success" className="text-center" style={{ marginBottom: 10, marginTop: 10,   marginBottom: 5, fontFamily: "Courier New", fontStyle: "oblique", borderStyle: 'ridge', borderWidth: 3  }} className="btn btn-success">
            {props.children}
        </button>
    )
}