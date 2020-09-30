// set up browsing (through external api's) components
import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { List } from "../components/List";
import Shoe from "../components/Shoe";


class Browsing extends Component {
    // start state
    state = {
        sneakers: [],
        shoeName: "",
        message: "Search For A Sneaker To Begin"
    };

    // register what gets put into input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    // get sneakers from external api based on search
    getSneakers = () => {
        API.getSneakers(this.state.shoeName)
            .then(res => {
                console.log("res.data inside getSneakers call: ", res.data);
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

    // register search functionality
    handleSearch = event => {
        event.preventDefault();
        this.getSneakers();
    };

    //  register save functionality
    handleSneakerSave = id => {
        const sneaker = this.state.sneakers.find(sneaker => sneaker.id);

        API.saveSneaker({
            sneakerId: sneaker.id,
            shoeName: sneaker.shoe,
            colorway: sneaker.colorway,
            brand: sneaker.brand,
            gender: sneaker.gender,
            retailPrice: sneaker.retailPrice,
            year: sneaker.year,
            image: sneaker.media.thumbUrl
        }).then(() => this.getSneakers());

    }

    render() {
        return (
            // what we need:
            // container for full page
            // nav bar to navigate to diff pages
            // jumbotron (or something similar) to hold search form
            // search form
            // place to hold results (i.e. a list or grid or both)
            <Container>
                {/* <Nav /> */}
                <Row>
                    <Col size="md-8">
                        <form style={{ justifyContent: "center", textAlign: "center"}}>
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
                            <div style={{ paddingLeft: "38%" }}>
                                <FormBtn
                                    onClick={this.handleSearch}
                                >
                                    Search
                                </FormBtn>
                            </div>
                        </form>
                    </Col>
                    <Col size="md-8">
                     <h1 style={{ paddingLeft: "0" }}>Search Results</h1>
                     {this.state.sneakers.length ? (
                        <List>
                            {this.state.sneakers.map( sneaker => (
                                <Shoe 
                                    key={sneaker.id}
                                    shoe={sneaker.shoe}
                                    colorway={sneaker.colorway}
                                    brand={sneaker.brand}
                                    gender={sneaker.gender}
                                    year={sneaker.year}
                                    image={sneaker.media.thumbUrl}
                                    Button={() => (
                                        <button
                                            onClick={() => this.handleSneakerSave(sneaker.id)}
                                            id="save-btn" >Save</button>
                                    )}
                                />
                            ))}
                        </List>
                        ) : (
                            <h2 className="text-center">Search shoes for results</h2>
                        )} 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Browsing;