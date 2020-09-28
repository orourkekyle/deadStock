// put together our SignUp components (similar to signup)
import React, { Component } from "react";
import API from "../utils/API";


class SignUp extends Component {
    state = {
        username: "",
        password: "",
        message: "Create a Username and Password"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    makeUser = () => {
        API.getLocalAuth(this.state)
            .then(res => {
                console.log("res inside makeUser: ", res);
                console.log("this.state: ", this.state.value);
            });
    };

    handleFormSubmit = () => {
        this.makeUser();
    }

    doGoogleAuth = event => {
        event.preventDefault();
        API.getGoogleAuth();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up</h2>
                        <form className="sign-up">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Username</label>
                                <input onChange={this.handleInputChange} type="username" className="form-control" id="username-input" placeholder="Username"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input onChange={this.handleInputChange} type="password" className="form-control" id="password-input" placeholder="Password"></input>
                            </div>
                            <button onClick={this.handleFormSubmit} type="submit" className="btn btn-default">Sign Up</button>
                            <button className="google-btn" onClick={this.doGoogleAuth}>Google+</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;