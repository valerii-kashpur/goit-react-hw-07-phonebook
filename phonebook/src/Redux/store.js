import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./slice/index";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...defaultMiddleware],
});

export default store;
