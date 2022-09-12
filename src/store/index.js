import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './reducers/bookSlice';
import authReducer from './reducers/authSlice';

const store = configureStore({ reducer: { bookReducer, authReducer } });

export default store;