// put together our login components (similar to signup)
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Button} from "reactstrap";

function login() {
// const [user, setUser] = useState([])
// const [formObject, setFormObject] = useState({})

// useEffect(() => {
//     loadItems()
// }, [])

// function loadItems() {
//     API.getItems()
//     .then(res => 
//         setItems(res.data)).catch(err => console.log(err));
// };

// function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
// };

// function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.username && formObject.password) {
//         API.Users({
//         name: formObject.username,
//         password: formObject.password,
//         })
//         .then(res => loadProfile())
//         .catch(err => console.log(err));
//     }
// }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                        </div>
                        <Button color="primary"type="submit" className="btn btn-default">Login</Button>
                        <Button color="secondary" className="google-btn" href="/google">Google+</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login;