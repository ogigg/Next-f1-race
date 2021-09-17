import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const apiBaseUrl = process.env.API_URL;

const httpClient = axios.create({
  baseURL: apiBaseUrl,
});

export default httpClient;
