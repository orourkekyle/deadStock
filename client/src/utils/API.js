// all our external api calls
import axios from "axios";

export default {
    // Oauth route
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    },

    // sneaker api get route
    getSneakers: function(q) {
        return axios.get("/api/sneakers", { params: { q: "name=" + q}});
    //     return axios.get("/api/sneakers", { params: { state: "name:" }})
    //         .then((params) => {
    //             console.log("Hitting frontend API get sneakers", params)
    //         })
    // }
    }
}