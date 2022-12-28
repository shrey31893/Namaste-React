import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  //this are just bunch of function
  reducers: {
    // this is action. that would be dispatched.
    // but we can't directly access it.
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem(state) {
      state.value.pop();
    },
    clearItem(state) {
      state.value = [];
    },
  },
});

// so we exported here. so that we can access them in code.
export const { addItem, deleteItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
