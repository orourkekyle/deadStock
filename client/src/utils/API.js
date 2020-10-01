// all our external api calls
import axios from "axios";

export default {
    // oauth route
    getGoogleAuth: function() {
        return axios.get("/oauth/google")
    },



    // sneaker api get route
    getSneakers: function(shoeName, brand, gender, releaseYear, colorway) {
        return axios.get("/api/sneakers", { params: {shoeName, brand, gender, releaseYear, colorway}});
    },

    // local auth routes
    getLocalAuth: function() {
        return axios.get("/local/createuser")
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