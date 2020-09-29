import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    )
}