import axios from 'axios';

// creates a base url and all the request are appended to this baseurl
const instance = axios.create ({
    baseURL: "​https://api.themoviedb.org/3",
});

export default instance;