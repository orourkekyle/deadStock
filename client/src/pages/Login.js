// put together our login components (similar to signup)
import React from "react";
// import API from "../utils/API";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";
import { Input, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";


function Login() {
    // function doGoogleAuth(){
    //     API.getGoogleAuth();
    // }

    let loginPath = "http://localhost:3001/oauth/google";

    return (
        <Container>
            <Row>
                <Col >
                <h1>DEADSTOCK</h1>
                <form  >
                    <Input  
                        name="username"
                        placeholder="username"
                    />
                    <Input 
                        name="password"
                        placeholder="password"
                    />
                    <FormBtn>
                        login
                    </FormBtn>
                    {/* <FormBtn type="button" className="btn btn-gplus btn-danger">
                        <i className="fab fa-google-plus-g pr-1">Google</i>
                    </FormBtn> */}
                    <a className="google-nav nav-link" as="a" href={loginPath}>
                        <GoogleButton className="google-btn"/>
                    </a>
                </form>
                </Col>
            </Row>
        </Container>        
    )
}
export default Login;