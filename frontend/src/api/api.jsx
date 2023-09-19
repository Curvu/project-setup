/* eslint-disable no-param-reassign */
import axios from 'axios';

const getAxiosInstance = (type) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_REQUEST_URL,
    timeout: 15000,
  });

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `${token}`;
    config.headers['Content-Type'] =
      type === 'json' ? 'application/json' : 'multipart/form-data';
    return config;
  });

  return axiosInstance;
};

const axiosInstanceJson = getAxiosInstance('json');

export const api = {
  getUsers() {
    return axiosInstanceJson.get('/users/');
  },
};
