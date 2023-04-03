import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import groupSlice from '../features/group/groupSlice';


const store = configureStore({
  reducer: { 
    auth: authReducer,
    allGroups: groupSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
