// put together our login components (similar to signup)
import React, { Component } from "react";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";
import { Input, FormBtn } from "../components/Form";
import  BackgroundVideo from "../components/BackgroundVideo/index";


class Login extends Component {

    loginPath = "http://localhost:3001/oauth/google";


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
                            <a className="nav-link" as='a' href={this.loginPath}>
                                <FormBtn type="button" className="btn btn-danger" >
                                    {/* <img src={googlePlusimg} alt="google" style={{height: "54px", width: "88px", borderRadius: "6px"}} /> */}
                                    <strong>Google+</strong>
                                    {/* <span>
                                        <img src={googleimg} alt="shoe" style={{ width: "30px", float: "right", display: "block", margin: "1px"}} />
                                    </span> */}
                                </FormBtn>
                            </a>
                </form>
                </Col>
            </Row>
        </Container>  
            
    )
}
}
export default Login;