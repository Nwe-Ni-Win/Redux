import CounterReducer from "./CounterReducer";
import authReducer from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: authReducer },
});

export default store;
