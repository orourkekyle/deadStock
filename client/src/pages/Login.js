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
    )
}
export default Login;