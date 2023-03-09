import { createSlice } from "@reduxjs/toolkit";
import { returnLocalStorageTocken } from "../../helpers/getTokenHelper";

const initialState = {
  isLoding: false,
  loginFailed: false,
  isLoggedIn: true, //returnLocalStorageTocken() ? true : false,
  token: returnLocalStorageTocken() ? returnLocalStorageTocken() : null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    test: (state) => {
      return state;
    },
  },
});

export const { test } = loginSlice.actions;

export default loginSlice.reducer;
