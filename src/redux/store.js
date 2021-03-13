import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import {contactsReducer} from './contacts';

const myMiddleware = store => next => action => {
  // console.log('My middleware', action);
  
  //передаёт управление экшенам дальше по цепочке
  next(action);
}

// console.log(getDefaultMiddleware());
const middleware = [...getDefaultMiddleware({
  serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
  myMiddleware,
  logger
];

//development or production
// console.log(process.env.NODE_ENV);
const store = configureStore({
  reducer: {
  contacts: contactsReducer,
},
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;