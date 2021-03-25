import {createWrapper} from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootreducer'

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

export const wrapper = createWrapper(makeStore, {debug: true}); 










