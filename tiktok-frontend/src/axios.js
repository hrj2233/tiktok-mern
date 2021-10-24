import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok-mern-sv.herokuapp.com/',
});

export default instance;
