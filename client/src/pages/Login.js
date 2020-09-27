// put together our login components (similar to signup)
import React from "react";
import {getGoogleAuth} from "../utils/API"


function Login() {

    function doGoogleAuth(){
        getGoogleAuth();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Username</label>
                            <input type="username" className="form-control" id="username-input" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                        <button className="google-btn" onClick={doGoogleAuth}>Google+</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;