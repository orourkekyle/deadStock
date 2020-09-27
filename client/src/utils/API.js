// all our external api calls
import axios from "axios";

export default {
    // oauth route
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    },
    // sneaker api get route
    getSneakers: function(q) {
        return axios.get("/api/sneakers");
    }
}