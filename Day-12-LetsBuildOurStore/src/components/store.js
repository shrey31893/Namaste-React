import { configureStore } from "@reduxjs/toolkit";
import shreyshah from "./cartSlice.js";

const store = configureStore({
  reducer: {
    cart: shreyshah, //cartReducer
  },
});

export default store;
