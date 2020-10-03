import axios from "axios";

export default {


    // sneaker api get route
    getSneakers: function(shoeName, brand, gender, releaseYear, colorway) {
        return axios.get("/api/sneakers", { params: {shoeName, brand, gender, releaseYear, colorway}});
    },

    // wishlist routes
    getWishlist: function() {
        return axios.get("/api/wishlist");
    },
    saveSneaker: function(sneakerData) {
        return axios.post("/api/wishlist", sneakerData);
    },
    saveToPopular: function(sneakerData) {
        return axios.post("/api/wishlist/createpopular", sneakerData)
    },
    saveUserSave: function(userData) {
        return axios.post("/api/wishlist/updatepopular", userData)
    },
    deleteSneaker: function(id) {
        return axios.delete("/api/wishlist/" + id);
    }

}