// all our external api calls
import axios from "axios";

export default {
    // oauth route
    getGoogleAuth: function() {
        return axios.get("/oauth/google")
    },
    // sneaker api get route
    getSneakers: function(q) {
        return axios.get("/api/sneakers") // { params: {q: "name:" + q } }
        // .then(() => {
        //     console.log("hitting getSneakers axios function in FE API")
        // });
    }
}
