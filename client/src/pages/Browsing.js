// set up browsing (through external api's) components
import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { List } from "../components/List";
import Shoe from "../components/Shoe";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import SelectGender from "../components/SelectGender";
import SelectBrand from "../components/SelectBrand";
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

    sortYearDsc = () => {
        switch (this.state.order) {
            case 'asc':
                this.setState({ sneakers: this.state.sneakers.sort((a, b) => b.year -a.year), order: 'desc'});
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

            <div>


                <Container>
                    {/* <Nav /> */}
                    <Row>
                        <Col size="md-8">
                            <form style={{ justifyContent: "center", textAlign: "center" }}>
                                <Input
                                    onChange={this.handleInputChange}
                                    name="shoeName"
                                    placeholder="Shoe name"
                                />

                                <SelectBrand
                                    onChange={this.handleInputChange}
                                    name="brand"
                                />

                                <SelectGender
                                    onChange={this.handleInputChange}
                                    name="gender"

                                />

                                <Input
                                    onChange={this.handleInputChange}
                                    name="releaseYear"
                                    placeholder="Release Year"
                                />
                                <Input
                                    onChange={this.handleInputChange}
                                    name="colorway"
                                    placeholder="colorway"
                                />
                                <div style={{}}>
                                    <FormBtn
                                        onClick={this.handleSearch}
                                    >
                                        Search

                                </FormBtn>
                                </div>
                            </form>
                        </Col>
                    </Row>

                </Container>



                <div className="shoe-container">
                    {/* create select menu to select sort types add button on click takes the selected sort type and then applies it */}
                    {/* need to create component for dropdown menu */}
                   
                    <button onClick={this.sortYearAsc}>Sort  Oldest to Newest</button>
                    <button onClick={this.sortYearDsc}>Sort Newest to Oldest</button>
                    <button onClick={this.sortPriceAsc}>Sort Price low to high</button>
                    <button onClick={this.sortPriceDesc}>Sort High to Low</button>
                    <h1 style={{ margin: "left" }}>Search Results</h1>
                    {this.state.sneakers.length ? (
                        <CardColumns size="sm-4">
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
                                            onClick={() => this.handleSneakerSave(sneaker.id)}
                                            id="save-btn" >Save</button>
                                    )}
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
