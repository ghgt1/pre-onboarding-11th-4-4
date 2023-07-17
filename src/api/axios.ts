import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('응답중 에러가 발생하였습니다.');
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('응답중 에러가 발생하였습니다.');
    return Promise.reject(error);
  },
);

export default instance;
