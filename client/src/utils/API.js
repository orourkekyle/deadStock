// all our external api calls
import axios from "axios";

export default {
    // oauth routes
    getGoogleAuth: function() {
        return axios.get("/oauth/google")
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
