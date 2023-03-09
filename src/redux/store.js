import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slicers/loginSlice";

export const store = configureStore({
  reducer: { login: loginReducer },
});
