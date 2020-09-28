// set up browsing (through external api's) components
import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Form from "../components/Form";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class Browsing extends Component {
    state = {
        sneakers: [],
        q: "",
        message: "Search for a Shoe!"
    };

    handleInputChange = event => {
        // const { name, value } = event.target;
        this.setState({
            q: event.target.value
        });
    };

    getSneakers = () => {
        API.getSneakers(this.state.q)
            .then(res => {
                console.log('res inside getSneakers call: ', res);
               return this.setState({
                    sneakers: res.data
                })
            })
            .catch(() => 
                this.setState({
                    sneakers:[],
                    message: "No Sneakers Found, try again"
                })
            );
        };

        handleFormSubmit = event => {
            event.preventDefault();
            this.getSneakers();
            console.log(this.state)

        };

        render() {
            return (
                <div>
                    <input onChange={this.handleInputChange} placeholder="Search"/> 
                    <button onClick={this.handleFormSubmit} type="submit">Submit</button>
                </div>
            );
        }
}

export default Browsing;    