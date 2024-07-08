import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { arr: [] },
  reducers: {
    add(state, action) {
      let index = state.arr.findIndex((item) => item.id === action.payload.id);
      let cpyArr = [...state.arr];
      if (index === -1) {
        state.arr.push(action.payload);
      } else {
        cpyArr[index] = {
          ...cpyArr[index],
          quantity: cpyArr[index].quantity + 1,
        };
        state.arr = cpyArr;
      }
    },
    reduce(state, action) {
      let index = state.arr.findIndex((item) => item.id === action.payload.id);
      let cpyArr = [...state.arr];
      let valueOfQuantity = cpyArr[index].quantity;
      if (valueOfQuantity === 1) {
        cpyArr = cpyArr.filter((fl) => fl.id !== action.payload.id);
      } else {
        cpyArr[index] = {
          ...cpyArr[index],
          quantity: cpyArr[index].quantity - 1,
        };
      }
      state.arr = cpyArr;
    },
  },
});

export const CartAction = CartSlice.actions;
export default CartSlice.reducer;
