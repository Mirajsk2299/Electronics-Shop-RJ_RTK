// src/features/quickView/quickViewSlice.js
import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
  name: "quickView",
  initialState: {
    product: null, // stores the product data for quick view
    isOpen: false, // controls whether modal is open or not
  },
  reducers: {
    openQuickView: (state, action) => {
      state.product = action.payload; // store clicked product data
      state.isOpen = true; // open the modal
    },
    closeQuickView: (state) => {
      state.isOpen = false; // close the modal
      state.product = null; // clear product
    },
  },
});

export const { openQuickView, closeQuickView } = quickViewSlice.actions;
export default quickViewSlice.reducer;
