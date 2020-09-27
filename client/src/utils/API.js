// all our external api calls GOing to be Controller..
import axios from "axios";


export const getGoogleAuth = () => {
    return axios.get("/auth/google")
    }

export const saveItem = () => {
    return 
    }

    // all our external api calls
import axios from "axios";

export const getUsers = () => {
    return axios.get('/api/user/matched')
};

export const getMe = () => {
    return axios.get('/api/user/matched')
};

export const saveItem = () => {
    return axios.post('/api/user', itemData);
};

export const getSavedItem = () => {
    return axios.get('/api/user')
};

export const removeItem = () => {
    return axios.delete(`/api/user/${itemId}`);
};

export const searchAPI = query => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.thesneakerdatabase.com/v1/sneakers?limit=100`, {
        params: {
            query: query,
            
        }
    });
};

export default {
    getUsers,
    getMe,
    searchAPI,
    removeItem,
    getSavedItem,
    saveItem,
}
