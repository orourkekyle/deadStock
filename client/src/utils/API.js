// all our external api calls
import axios from "axios";

export default {
    // oauth route
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    },
    // sneaker route
    getSneakers: function(shoeName) {
        return axios.get("/api/sneakers", { params: { shoeName: "name=" + shoeName}});
    },
    // getUser api get route
    getUser: function() {
        return axios.get("/api/user")
    }
}
