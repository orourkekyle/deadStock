// all our external api calls
import axios from "axios";

export default {
    // oauth route
    getGoogleAuth: function() {
        return axios.get("/oauth/google")
    },
    // googleRedirect: function() {
    //     return axios.get("/auth/google/redirect")
    // },

    // local auth routes
    createLocalUser: function(username, password) {
        return axios.post("/local/createuser")
    },
    getLocalUser: function() {
        return axios.get("/local/getuser")
    },

    // sneaker api get route
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