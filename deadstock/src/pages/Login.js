// put together our login components (similar to signup)
import React from "react";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// let googleLoginPath = (process.env.NODE_ENV === "production") : "http://localhost:3001/google"


function Login() {
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
                        <button type="submit" className="btn btn-default">Login</button>
                        <a className="google-btn" href="/auth/google">Google+</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;