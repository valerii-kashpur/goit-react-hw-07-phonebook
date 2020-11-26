import { createSlice } from "@reduxjs/toolkit";

const loader = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    loaderOn(state, action) {
      return true;
    },
    loaderOff(state, action) {
      return false;
    },
  },
});

const { actions, reducer } = loader;

export const { loaderOn, loaderOff } = actions;
export default reducer;
