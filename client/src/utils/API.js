// all our external api calls
import axios from "axios";

export default {
    getGoogleAuth: function() {
        return axios.get("/auth/google")
    }
}