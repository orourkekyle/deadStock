// put together our login components (similar to signup)
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
// const [user, setUser] = useState([])
// const [formObject, setFormObject] = useState({})

// useEffect(() => {
//     loadItems()
// }, [])


// function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
// };

// function handleFormSubmit(event) {
    // event.preventDefault();
    // if (formObject.username && formObject.password) {
    //     API.Users({
    //     name: formObject.username,
    //     password: formObject.password,
    //     })
    //     .then(res => loadProfile())
    //     .catch(err => console.log(err));
    // }
// }


    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form class="login">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="email-input" placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="password-input" placeholder="Password"></input>
                        </div>
                        <button type="submit" class="btn btn-default">Sign Up</button>
                    </form>
                    <br>
                        <p>Or Login<a href="/">Here</a></p>
                    </br>
                </div>
            </div>
        </div>
    )
}

export default SignUp;