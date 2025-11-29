import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
  name: "quickView",
  initialState: {
    product: null,
    isOpen: false,
  },
  reducers: {
    openQuickView: (state, action) => {
      state.product = action.payload;
      state.isOpen = true;
    },
    closeQuickView: (state) => {
      state.isOpen = false;
      state.product = null;
    },
  },
});

export const { openQuickView, closeQuickView } = quickViewSlice.actions;
export default quickViewSlice.reducer;
