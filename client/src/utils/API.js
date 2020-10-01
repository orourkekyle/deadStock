// all our external api calls
import axios from "axios";

export default {
    // Oauth route
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    },


    // sneaker api get route
    getSneakers: function(shoeName, brand, gender, releaseYear) {
        return axios.get("/api/sneakers", { params: {shoeName, brand, gender, releaseYear}});
    },
    // will need redirect route



    // local auth routes
    getLocalAuth: function() {
        return axios.get("/local/createuser")
    },

    // sneaker API routes
    getSneakers: function(shoeName, brand, gender, releaseYear) {
        return axios.get("/api/sneakers", { params: {shoeName, brand, gender, releaseYear}});
    },

    // wishlist routes
    getWishlist: function() {
        return axios.get("/api/wishlist")
    },
    saveSneaker: function(sneakerData) {
        console.log("sneakerData in API.js: ", sneakerData);
        return axios.post("/api/wishlist", sneakerData);
    },
    deleteSneaker: function(id) {
        return axios.delete("/api/wishlist/" + id);
    }

}