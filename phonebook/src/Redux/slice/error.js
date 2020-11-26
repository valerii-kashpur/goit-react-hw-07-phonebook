import { createSlice } from "@reduxjs/toolkit";

const error = createSlice({
  name: "error",
  initialState: false,
  reducers: {
    setError(state, action) {
      return true;
    },
    resetError(state, action) {
        return false;
      },
  },
});

const {actions, reducer} = error;

export const {setError, resetError} = actions;
export default reducer