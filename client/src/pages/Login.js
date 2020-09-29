// put together our login components (similar to signup)
import React from "react";
import API from "../utils/API";
import "./Login.css";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";



function Login() {

    function doGoogleAuth(){
        API.getGoogleAuth();
    }
    return (
        <Container fluid >
            <Row fluid >
                <Col size="md-12" >
                <h1 style={{
                    textAlign:"center",
                    paddingTop: "12%"
                }}>Login</h1>
                <form style={{ textAlign:"center"}}>
                    <Input  
                        style={{ textAlign:"left"}}
                        name="username"
                        placeholder="username"
                    />
                    <Input 
                        style={{ textAlign:"left"}}
                        name="password"
                        placeholder="password"
                    />
                </form>
                <div style={{ display:"flex", paddingLeft: "42%" }}>
                    <FormBtn
                        style={{ marginLeft: "center"}}
                    >
                        login
                    </FormBtn>
                    <FormBtn 
                        onClick={doGoogleAuth}
                    >
                        Google
                    </FormBtn>
                    <FormBtn>
                        <Link to={"/signup"}>
                        signup
                        </Link>
                    </FormBtn>
                </div>
                </Col>
            </Row>
        </Container>


       
          
                // <div className="col-md-6 col-md-offset-3">
                    
                    // <form className="login">
                    //     <div className="form-group">
                    //         <label htmlFor="exampleInputUsername1">Username</label>
                    //         <input type="username" className="form-control" id="username-input" placeholder="Email"></input>
                    //     </div>
                    //     <div className="form-group">
                    //         <label htmlFor="exampleInputPassword1">Password</label>
                    //         <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                    //     </div>
                    //     <button type="submit" className="btn btn-default">Login</button>
                    //     <button className="google-btn" onClick={doGoogleAuth}>Google+</button>
                    // </form>
                
        
    )
}

export default Login;