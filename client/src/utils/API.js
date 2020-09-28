// all our external api calls
import axios from "axios";

export default {
    // Oauth route
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    },

    // sneaker api get route
    getSneakers: function() {
        return axios.get("/api/sneakers");
    //     return axios.get("/api/sneakers", { params: { state: "name:" }})
    //         .then((params) => {
    //             console.log("Hitting frontend API get sneakers", params)
    //         })
    // }
    }
}