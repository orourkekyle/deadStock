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
    return axios.get('http://api', {
        params: {
            query: query,
            api_key: " "
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