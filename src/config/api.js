import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

export default api;
