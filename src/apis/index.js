import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'https://kusitms.shop/api/';
Axios.defaults.withCredentials = true;

export default Axios;
