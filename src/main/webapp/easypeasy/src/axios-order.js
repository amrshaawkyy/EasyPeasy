import axios from 'axios';

const instance = axios.create({
    baseURL: '/Home'
});


export default instance;
