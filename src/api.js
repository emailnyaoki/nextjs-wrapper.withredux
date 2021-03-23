import axios from 'axios';
/* import { parseJSON } from 'date-fns';
import {logoutUser, toOpenLoginDialog} from './../redux/slices/user.slice'
import {resetStatuses} from './../redux/slices/stdb.slice'
import store from "./../redux/store"; */


export const api = axios.create({
    baseURL: process.env.REACT_APP_BASEAPIURL+'/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token e783ea4ae0f3d61927a8e760b739f89c00c656f4'
    },
  });

/* api.interceptors.request.use(
    config => {
      const user =JSON.parse(localStorage.getItem('user'));
      if (user){ 
        const token = user.token;     
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
      }
      return config
    },
    error => Promise.reject(error)
  );


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // dispatch something to your store
      store.dispatch(logoutUser());
      store.dispatch(resetStatuses());
      store.dispatch(toOpenLoginDialog());

    }

    return Promise.reject(error);
  }
)


export const apiupload = axios.create({
  baseURL: process.env.REACT_APP_BASEAPIURL+'/',
  headers: {
    'Content-Type': 'multipart/form-data'
  },
});

apiupload.interceptors.request.use(
  config => {
    const user =JSON.parse(localStorage.getItem('user'));
    if (user){ 
      const token = user.token;     
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
    }
    return config
  },
  error => Promise.reject(error)
);


apiupload.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // dispatch something to your store
      store.dispatch(logoutUser());
      store.dispatch(resetStatuses());
      store.dispatch(toOpenLoginDialog());
    }

    return Promise.reject(error);
  }
) */



  
