// put together our login components (similar to signup)
import React, {Component} from "react";
// // import API from "../utils/API";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";
import { Input, FormBtn } from "../components/Form";

import { Link } from "react-router-dom";
import  BackgroundVideo from "../components/BackgroundVideo/index";


class Login extends Component {
    // function doGoogleAuth(){
    //     API.getGoogleAuth();
    // }
    
    
   
//   loginPath = () => "http://localhost:3001/oauth/google"

    render() {
    return (

        
        <Container fluid >
            <Navy />
            <BackgroundVideo />
            <Row fluid >
                <Col size="md-12" >
                <h1 style={{
                    textAlign:"center",
                    paddingTop: "12%"
                }}>DEADSTOCK</h1>
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

                    <a className="nav-link" as='a' href="http://localhost:3001/oauth/google">
                        <button type="button" className="btn btn-gplus btn-danger">
                            <i className="fab fa-google-plus-g pr-1">Google</i>
                        </button>
                    </a>
                    {/* <FormBtn
                        onClick={doGoogleAuth}
                    >
                        Google

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
}
export default Login;