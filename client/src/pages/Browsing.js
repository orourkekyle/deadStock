// set up browsing (through external api's) components
import React, { Component } from "react";
import API from "../utils/API";
import { FormGroup, Row, Col, Container, Form } from "reactstrap";
import { Input, FormBtn } from "../components/Form";
import { List } from "../components/List";
import Shoe from "../components/Shoe";
import { CardDeck } from "reactstrap";
import Card from "react-bootstrap/Card";
import SelectGender from "../components/SelectGender";
import SelectBrand from "../components/SelectBrand";
import "./Browsing.css";


class Browsing extends Component {
    // start state
    state = {
        sneakers: [],
        shoeName: "",
        brand: "",
        gender: "",
        releaseYear: "",
        colorway: "",
        message: "Search For A Sneaker To Begin",
        order: 'asc'

    };



    // you want order, variables, and attribute you want to sort by.
    // function on button click to sort. Will have to change so that it takes this.state (i think?) and sort based of selected value of menu



    sortPriceDesc = () => {
        switch (this.state.order) {
            case 'asc':
                this.setState({ sneakers: this.state.sneakers.sort((a, b) => a.retailPrice - b.retailPrice), order: 'desc' });
                break;
        }
    }

    sortPriceAsc = () => {
        switch (this.state.order) {
            case 'desc':
                this.setState({ sneakers: this.state.sneakers.sort((a, b) => b.retailPrice - a.retailPrice), order: 'asc' });
                break;
        }
    }

    sortYearAsc = () => {
        switch (this.state.order) {
            case 'desc':
                this.setState({ sneakers: this.state.sneakers.sort((a, b) => a.year - b.year), order: 'asc' });
        }
    }

    sortYearDesc = () => {
        switch (this.state.order) {
            case 'asc':
                this.setState({ sneakers: this.state.sneakers.sort((a, b) => b.year - a.year), order: 'desc' });
        }
    }


    // register what gets put into input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // get sneakers from external api based on search
    getSneakers = () => {
        API.getSneakers(this.state.shoeName, this.state.brand, this.state.gender, this.state.releaseYear, this.state.colorway)
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

    handleUserSave = id => {
        const sneaker = this.state.sneakers.find(sneaker => sneaker.id === id);
        API.saveSneaker({
            sneakerId: sneaker.id,
            shoeName: sneaker.shoe,
            colorway: sneaker.colorway,
            brand: sneaker.brand,
            gender: sneaker.gender,
            retailPrice: sneaker.retailPrice,
            year: sneaker.year,
            image: sneaker.media.thumbUrl
        }).then(() => console.log("Saved Shoe to User!"));
    };


    handlePopularSave = id => {
        const sneaker = this.state.sneakers.find(sneaker => sneaker.id === id);
        API.saveToPopular({
            sneakerId: sneaker.id,
            shoeName: sneaker.shoe,
            colorway: sneaker.colorway,
            brand: sneaker.brand,
            gender: sneaker.gender,
            retailPrice: sneaker.retailPrice,
            year: sneaker.year,
            image: sneaker.media.thumbUrl
        }).then(() => console.log("Saved Shoe to Popular!"));
    };

    handleIdSave = id => {
        const sneaker = this.state.sneakers.find(sneaker => sneaker.id === id);
        API.saveUserSave({
            sneakerId: sneaker.id
        }).then(() => console.log("Saved Id in Popular!"));
    };

    handleSaves = id => {
        this.handleUserSave(id);
        this.handlePopularSave(id);
        this.handleIdSave(id);
    };

    render() {

        return (
            // what we need:
            // container for full page
            // nav bar to navigate to diff pages
            // jumbotron (or something similar) to hold search form
            // search form

            // place to hold results (i.e. a list or grid or both


            <Container className="main-container">
                {/* <Nav /> */}
                <Row>
                    <Col sm='12' md='6' lg='6' className="text-center mx-auto">
                        <FormGroup className="text-center mx-auto">

                            <Input
                                onChange={this.handleInputChange}
                                name="shoeName"
                                placeholder="Shoe name"
                            />
                            <Input
                                onChange={this.handleInputChange}
                                name="colorway"
                                placeholder="colorway"
                            />
                            <Input
                                onChange={this.handleInputChange}
                                name="releaseYear"
                                placeholder="Release Year"
                            />

                            <SelectBrand
                                placeholder="brand"
                                onChange={this.handleInputChange}
                                name="brand"
                            />

                            <SelectGender
                                placeholder="gender"
                                onChange={this.handleInputChange}
                                name="gender"
                            />

                            <div>
                                <FormBtn onClick={this.handleSearch}> Search </FormBtn>
                            </div>

                        </FormGroup>
                    </Col>
                </Row>

                {/* create select menu to select sort types add button on click takes the selected sort type and then applies it */}
                {/* need to create component for dropdown menu */}
                {/* keep button functions within page but move buttons to components so that we can style it */}
                <Row>
                    <Col>
                        <FormBtn onClick={this.sortPriceDesc}> Sort Price from Low to High </FormBtn>
                        <FormBtn onClick={this.sortYearDesc}>Sort from Newest to Oldest</FormBtn>
                    </Col>
                    <Col>
                        <FormBtn onClick={this.sortPriceAsc}> Sort Price from High to Low </FormBtn>
                        <FormBtn onClick={this.sortYearAsc}> Sort from Oldest to Newest </FormBtn>
                    </Col>
                </Row>
                <h1 style={{marginTop: 5}}>Search Results</h1>
                <Row className=" ">
                    {this.state.sneakers.length ? (

                        <Col sm='12' md='12' lg='12' >
                            <CardDeck >

                                {this.state.sneakers.map(sneaker => (
                                    <Shoe
                                        key={sneaker.id}
                                        shoe={sneaker.shoe}
                                        colorway={sneaker.colorway}
                                        brand={sneaker.brand}
                                        colorway={sneaker.colorway}
                                        price={sneaker.retailPrice}
                                        gender={sneaker.gender}
                                        year={sneaker.year}
                                        image={sneaker.media.thumbUrl}
                                        Button={() => (
                                            <button
                                                onClick={() => this.handleSaves(sneaker.id)}
                                                id="save-btn" >Save</button>
                                        )}
                                    />
                                ))}
                            </CardDeck>
                        </Col>


                    ) : (
                            <h2 className="text-center">Search shoes for results</h2>
                        )}
                </Row>
            </Container>
        );

    }
}

export default Browsing;
