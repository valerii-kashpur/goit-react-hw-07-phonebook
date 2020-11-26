import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addItem(state, action) {
      return [...state, action.payload];
    },
    deleteItem(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
    setItems(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = contactSlice;

export const { addItem, deleteItem, setItems } = actions;
export default reducer;
