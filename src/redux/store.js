// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import jobReducer from './slice/jobSlice';
import { applicationApi } from '../services/applicationApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducer,
    [applicationApi.reducerPath]: applicationApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationApi.middleware)
});

export default store;