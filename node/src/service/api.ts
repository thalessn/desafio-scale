import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.amock.io/api/fcmaia',
});

export default api;
