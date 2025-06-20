import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isLogin: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    Login(state) {
      state.isLogin = true;
    },
    Logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
