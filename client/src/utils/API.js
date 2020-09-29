// all our external api calls
import axios from "axios";

export default {
    // oauth routes
    getGoogleAuth: function() {
        return axios.get("/oauth/google")
    },
    // will need redirect route

    //=========================

    // local auth routes
    getLocalAuth: function() {
        return axios.get("/local/createuser")
    },


    // sneaker api get route
    getSneakers: function(shoeName) {
        return axios.get("/api/sneakers", { params: {shoeName: "name=" + shoeName } }) // { params: {q: "name:" + q } }
        // .then(() => {
        //     console.log("hitting getSneakers axios function in FE API")
        // });
    }
}
