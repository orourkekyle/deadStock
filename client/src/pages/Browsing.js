// set up browsing (through external api's) components
import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { List } from "../components/List";
import Shoe from "../components/Shoe";
// import { Demo } from "../components/Nav";
// import { Nav } from 'rsuite';
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

class Browsing extends Component {
    // start state
    state = {
        sneakers: [],
        shoeName: "",
        brand: "nike",
        gender: "women",
        releaseYear: "",
        message: "Search For A Sneaker To Begin",
        order: 'asc'
    };

    // function on button click to sort. Will have to change so that it takes this.state (i think?) and sort based of selected value of menu
    clickHandler = () => {
        
        switch(this.state.order) {
            case 'asc':  
              this.setState({data: this.state.sneakers.sort((a, b) => a.retailPrice - b.retailPrice), order: 'desc'});
              break;
            case 'desc': 
              this.setState({data: this.state.sneakers.sort((a, b) => b.retailPrice - a.retailPrice), order: 'asc' });
              break;
        }
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
        API.getSneakers(this.state.shoeName, this.state.brand, this.state.gender, this.state.releaseYear)
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
                                <select name="brand" className="custom-select" aria-labelledby="dropdownMenuButton" onChange={this.handleInputChange}>
                                    <option defaultValue="nike">Nike</option>
                                    <option value="puma">Puma</option>
                                    <option value="vans">Vans</option>
                                    <option value="converse">Converse</option>
                                    <option value="jordan">Jordan</option>
                                    <option value="new balance">New Balance</option>
                                    <option value="reebok">Rebook</option>
                                    <option value="saucony">Saucony</option>
                                    <option value="under armor">Under Armor</option>
                                    <option value="yeezy's">Yeezy's</option>
                                    <option value="adiddas">Adidas</option>
                                    <option value="ASIC">ASIC</option>
                                </select>


                                <select name="gender" className="custom-select" aria-labelledby="dropdownMenuButton" onChange={this.handleInputChange}>
                                    <option defaultValue="women">Women</option>
                                    <option value="unisex">Unisex</option>
                                    <option value="toddler">Toddler</option>
                                    <option value="preschool">Preschool</option>
                                    <option value="men">Men</option>
                                    <option value="infant">Infant</option>
                                    <option value="child">Child</option>

                                </select>
                                <Input
                                    onChange={this.handleInputChange}
                                    name="releaseYear"
                                    placeholder="Release Year"
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
                <select name="gender" className="custom-select" aria-labelledby="dropdownMenuButton" onChange={this.handleInputChange}>
                                    <option defaultValue="retailPrice">Retail Price</option>
                                    <option value="gender">Gender</option>
                                    <option value="brand">Brand</option>
                                    <option value="releaseYear">Preschool</option>
                                    <option value="men">Men</option>
                                    <option value="infant">Infant</option>
                                    <option value="child">Child</option>
                </select>
                <button onClick={this.clickHandler}>sort</button>
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
