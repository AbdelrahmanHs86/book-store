import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './reducers/bookSlice';

const store = configureStore({ reducer: { bookReducer } });

export default store;