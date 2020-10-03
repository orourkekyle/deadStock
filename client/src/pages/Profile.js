// put together profile components
import React, { Component } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import CardColumns from "react-bootstrap/CardColumns";
import Shoe from "../components/Shoe";

class Profile extends Component{
    state = {
        wishlist: [],
        currentUser: [],
        totalprice: [],
        message: "Add Sneakers To Your Wishlist"
    };

    // loads wishlisht on page load
    componentDidMount = () => {
        // this.getCurrentUser();
        return this.loadUserWishlist();
    };

    // gets the user wishlist by their googleId
    loadUserWishlist = () => {
        API.getWishlist()
            .then(res => {
                console.log("res.data[0].wishlist[0] - inside loadUserWishlist: ", res.data[0].wishlist[0]);
                console.log("res.data[0].username - inside loadUserWishlist: ", res.data[0].username);
                console.log("map data sneakerPrice arr - inside loadUserWishlist: ", res.data[0].wishlist.map(wishlistObj => wishlistObj.retailPrice));
                let priceArr = res.data[0].wishlist.map(wishlistObj => wishlistObj.retailPrice);
                return this.setState({
                    wishlist: res.data[0].wishlist,
                    currentUser: res.data[0].username,
                    totalprice: priceArr
                });
            })
            .catch(() =>
                this.setState({
                    wishlist: [],
                    message: "No Sneakers Found"
                })
            );
    };

    // deletes sneaker from collection with googleId matching current user as well as sneaker
    removeSneaker = id => {
        API.deleteSneaker(id)
            .then(res => {
                // returns html not json
                console.log(" res.data - inside removeSneaker: ", res.data);
                // returns proper id
                console.log("id - inside removeSneaker: ", id);
                return this.loadUserWishlist();
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                {this.state.totalprice.length ? (
                    <div>
                        <h5>Total Wishlist Amount:</h5>
                        <p style={{color: 'green'}}>${this.state.totalprice.reduce((result, number) => result+number)}</p>
                    </div>
                ) : (
                    <div></div>
                )}
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