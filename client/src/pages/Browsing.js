// set up browsing (through external api's) components
import React, { Component } from "react";
import API from "../utils/API";


class Browsing extends Component {
    state = {
        sneakers: [],
        q: "",
        message: "Search For A Sneaker To Begin"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getSneakers = () => {
        API.getSneakers(this.state.q)
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
                <input onChange={this.handleInputChange} placeholder="Shoe Name" type="text"></input>
                <button onClick={this.handleFormSubmit} type="submit">Search</button>
            </div>
        );
    }
}

export default Browsing;