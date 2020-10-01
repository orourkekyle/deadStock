// all our external api calls
import axios from "axios";

export default {
    // Oauth route
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    },


    // sneaker api get route
    getSneakers: function(shoeName, brand, gender, releaseYear, colorway) {
        return axios.get("/api/sneakers", { params: {shoeName, brand, gender, releaseYear, colorway}});
    },
    // will need redirect route



    // local auth routes
    getLocalAuth: function() {
        return axios.get("/local/createuser")
    },


    // sneaker API routeS
    // getSneakers: function(shoeName) {
    //     return axios.get("/api/sneakers", { params: {shoeName: "&name=" + shoeName } })
    // },

    // wishlist routes
    getSavedSneakers: function() {
        return axios.get("/api/wishlist")
    },
    saveSneaker: function(sneakerData) {
        console.log("sneakerData in API.js: ", sneakerData);
        return axios.post("/api/wishlist", sneakerData);

    }
}