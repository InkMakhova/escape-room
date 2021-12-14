import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001/';
const TIMEOUT = 1000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  // api.interceptors.response.use(
  //   (response) => response,
  //
  //   // (error) => {
  //   //   return Promise.reject(error);
  //   // },
  // );

  api.interceptors.request.use(
    (config) => {
      return config;
    },
  );

  return api;
};
