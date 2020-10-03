// put together our login components (similar to signup)
import React, { Component } from "react";
import "./Login.css";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";


class Login extends Component {

    loginPath = "http://localhost:3001/oauth/google";

    render() {
        return (
            <Container fluid >
                <Row fluid >
                    <Col size="md-12" >
                        <h1 style={{
                            textAlign: "center",
                            paddingTop: "12%"
                        }}>DEADSTOCK</h1>
                        <form style={{ textAlign: "center" }}>
                            <Input
                                style={{ textAlign: "left" }}
                                name="username"
                                placeholder="username"
                            />
                            <Input
                                style={{ textAlign: "left" }}
                                name="password"
                                placeholder="password"
                            />
                            <FormBtn
                                className="btn btn-success"
                                style={{ marginLeft: "auto" }}
                            >
                            <strong>Login</strong>
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