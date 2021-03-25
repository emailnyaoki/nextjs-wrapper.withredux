import {createStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import store from './store'
//import {slide.reducer} from './../redux/slices/usergithub'


import rootReducer from './rootreducer'

// create your reducer

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,        
        middleware: getDefaultMiddleware({
          serializableCheck: false,
        }),
      })
      
      /* if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./rootreducer', () => {
          const newRootReducer = require('./rootreducer').default
          store.replaceReducer(newRootReducer)
        })
      } */
  
    return store;
  };


// create a makeStore function
//const makeStore = context => store//createStore(rootReducer,[...getDefaultMiddleware()]);

// export an assembled wrapper
//export const wrapper = createWrapper(makeStore, {debug: true}); 
export const wrapper = createWrapper(makeStore, {debug: true}); 


/* import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./rootreducer";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';


export const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    //preloadedState: { ...initStoreSSR, ...preloadedState  },
    middleware: [...getDefaultMiddleware()]
  });
};


export const wrapper = createWrapper(initStore, {debug: true});  */










