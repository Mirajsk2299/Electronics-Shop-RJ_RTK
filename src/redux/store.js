// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import quickViewReducer from "../redux/btns/quickviewSlice";

export const store = configureStore({
  reducer: {
    quickView: quickViewReducer, // add the slice here
  },
});
