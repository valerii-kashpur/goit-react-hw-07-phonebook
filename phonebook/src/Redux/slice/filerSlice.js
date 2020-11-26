import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    editFilter(state, action) {
      return action.payload;
    },
  },
});

const {actions, reducer} = filterSlice;

export const {editFilter} = actions;
export default reducer