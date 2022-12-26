import loginReducer from "./loginSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
