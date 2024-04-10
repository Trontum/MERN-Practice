import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice:0,
    items1: [],
    items2:[]
  },
  reducers: {
    addItem1: (state, action) => {
      state.items1.push(action.payload);
      state.totalPrice+=action.payload.price;
    },
    addItem2: (state, action) => {
      state.items2.push(action.payload);
      state.totalPrice+=action.payload.price;
    },
    clearCart: (state, action) => {
      return { items1: [],items2:[],totalPrice:0 };
    },
  },
});

export default cartSlice.reducer;

export const { addItem1,addItem2, clearCart } = cartSlice.actions;

// action : {
// payload : info about the product details
// }