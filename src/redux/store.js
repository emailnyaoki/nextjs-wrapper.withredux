import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './rootreducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootreducer', () => {
    const newRootReducer = require('./rootreducer').default
    store.replaceReducer(newRootReducer)
  })
}


export default store 

