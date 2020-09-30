// put together profile components
import React, { Component } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import CardColumns from "react-bootstrap/CardColumns";
import Shoe from "../components/Shoe";

class Profile extends Component{
    state = {
        wishlist: [],
        message: "Add Sneakers To Your Wishlist"
    };

    componentDidMount = () => {
        return this.loadUserWishlist();
    };

    loadUserWishlist = () => {
        API.getWishlist()
            .then(res => {
                console.log("res.data - inside profile: ", res.data);
                return this.setState({
                    wishlist: res.data
                });
            })
            .catch(() =>
                this.setState({
                    wishlist: [],
                    message: "No Sneakers Found"
                })
            );
    };

    removeSneaker = sneakerId => {
        API.deleteSneaker(sneakerId)
            .then(res => {
                // returns html not json
                console.log(" res.data - inside removeSneaker: ", res.data);
                // returns proper id
                console.log("sneakerId - inside removeSneaker: ", sneakerId);
                return this.loadUserWishlist();
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                {/* <Row> */}
                    {this.state.wishlist.length ? (
                        <CardColumns size="md-8">
                            {this.state.wishlist.map(sneakers => (
                                <Shoe 
                                    key={sneakers.sneakerId}
                                    shoe={sneakers.shoeName}
                                    colorway={sneakers.colorway}
                                    brand={sneakers.brand}
                                    price={sneakers.retailPrice}
                                    gender={sneakers.gender}
                                    year={sneakers.year}
                                    image={sneakers.image}
                                    Button={() => (
                                        <button
                                            onClick={() => this.removeSneaker(sneakers.sneakerId)}
                                            id="delete-sneaker">Remove From Wishlist</button>
                                    )}
                                />
                            ))}
                        </CardColumns>
                    ) : (
                        <h1>You Don't Have Any Sneakers In Your Wishlist</h1>
                    )}
                {/* </Row> */}
            </Container>
        )
    }
}


export default Profile;