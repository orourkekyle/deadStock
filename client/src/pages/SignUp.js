// put together our SignUp components (similar to signup)
import React, { Component } from "react";
import API from "../utils/API";
import { Input } from "../components/Form";


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
        // console.log("username: ", this.state.username);
        // console.log("password: ", this.state.password);
        API.createLocalUser(this.state.username, this.state.password)
            .then(res => {
                console.log("res: ", res);
                // const { name, value } = event.target
                // return this.setState({
                //     [name]: value
                // })
            });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.makeUser();
    }

    doGoogleAuth = event => {
        // event.preventDefault();
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
                                <Input onChange={this.handleInputChange} name="username" className="form-control" id="username-input" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <Input onChange={this.handleInputChange} type="password" name="password" className="form-control" id="password-input" placeholder="Password" />
                            </div>
                            <button onClick={this.handleFormSubmit} className="signup-btn">Sign Up</button>
                            <button className="google-btn" onClick={this.doGoogleAuth}>Google+</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;