import CounterReducer from "./CounterReducer";
import authReducer from "./authReducer";
import todoReducer from "./reducer/todo";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: authReducer, todo: todoReducer },
});

export default store;
