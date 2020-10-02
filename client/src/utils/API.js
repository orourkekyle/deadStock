import axios from "axios";

export default {
    // oauth route
    getGoogleAuth: function() {
        return axios.get("/oauth/google");
    },

    // local auth routes
    createLocalUser: function(username, password) {
        console.log("before axios.post on FE");
        return axios.post("/local/createuser", { username, password });
    },
    getCurrentLocalUser: function() {
        return axios.get("/local/getuser");
    },

    // sneaker api get route
    getSneakers: function(shoeName, brand, gender, releaseYear) {
        return axios.get("/api/sneakers", { params: {shoeName, brand, gender, releaseYear}});
    },

    // wishlist routes
    getWishlist: function() {
        return axios.get("/api/wishlist");
    },
    saveSneaker: function(sneakerData) {
        return axios.post("/api/wishlist", sneakerData);
    },
    deleteSneaker: function(id) {
        return axios.delete("/api/wishlist/" + id);
    }

}