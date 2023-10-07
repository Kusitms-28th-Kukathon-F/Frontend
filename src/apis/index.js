import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'https://'; // Server Url
Axios.defaults.withCredentials = true;

export default Axios;
