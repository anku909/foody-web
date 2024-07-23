import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id } = action.payload.card.info;
      const index = state.findIndex((item) => item.card.info.id === id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
