// set up browsing (through external api's) components
import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { List } from "../components/List";
import Shoe from "../components/Shoe";
// import { Demo } from "../components/Nav";
import { Nav } from 'rsuite';
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";


class Browsing extends Component {
    state = {
        sneakers: [],
        shoeName: "",
        brand: "",
        gender: "",
        releaseYear: "",
        message: "Search For A Sneaker To Begin"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getSneakers = () => {
        API.getSneakers(this.state.shoeName, this.state.brand, this.state.gender, this.state.releaseYear)
            .then(res => {
                console.log("res inside getSneakers call: ", res.data);
                return this.setState({
                    sneakers: res.data
                })
            })
            .catch(() =>
                this.setState({
                    sneakers: [],
                    message: "No Sneakers Found, Try a Different Query"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getSneakers();
    };

    render() {
        return (
            // what we need:
            // container for full page
            // nav bar to navigate to diff pages
            // jumbotron (or something similar) to hold search form
            // search form
            // place to hold results (i.e. a list or grid or both)

            <div>

                <Container>
                    <Nav />
                    <Row>
                        <Col size="md-8">
                            <form style={{ justifyContent: "center", textAlign: "center" }}>
                                <Input
                                    onChange={this.handleInputChange}
                                    name="shoeName"
                                    placeholder="Shoe name"
                                />
                                <Input
                                    onChange={this.handleInputChange}
                                    name="brand"
                                    placeholder="Brand"
                                />
                                <Input
                                    onChange={this.handleInputChange}
                                    name="gender"
                                    placeholder="Gender"
                                />
                                <Input
                                    onChange={this.handleInputChange}
                                    name="year"
                                    placeholder="Release Year"
                                />
                                <div style={{}}>
                                    <FormBtn
                                        onClick={this.handleFormSubmit}
                                    >
                                        Search

                                </FormBtn>
                                </div>
                            </form>
                        </Col>
                    </Row>

                </Container>


                <div className="shoe-container">

                    <h1 style={{ margin: "left" }}>Search Results</h1>
                    {this.state.sneakers.length ? (
                        <CardColumns size="sm-4">
                            {this.state.sneakers.map(sneaker => (
                                <Shoe
                                    key={sneaker.id}
                                    shoe={sneaker.shoe}
                                    brand={sneaker.brand}
                                    colorway={sneaker.colorway}
                                    price={sneaker.retailPrice}
                                    gender={sneaker.gender}
                                    year={sneaker.year}
                                    image={sneaker.media.thumbUrl}
                                />
                            ))}
                        </CardColumns>
                    ) : (
                            <h2 className="text-center">Search shoes for results</h2>
                        )}
                    {/* </Col> */}

                    {/* </Row> */}
                </div>
            </div>
        );
    }
}

export default Browsing;
