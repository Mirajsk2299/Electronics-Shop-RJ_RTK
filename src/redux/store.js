import { configureStore } from "@reduxjs/toolkit";
import quickViewReducer from "../redux/btns/quickviewSlice";

export const store = configureStore({
  reducer: {
    quickView: quickViewReducer,
  },
});
