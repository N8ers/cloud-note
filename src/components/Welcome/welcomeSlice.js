import { createSlice } from "@reduxjs/toolkit";

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState: {
    // email: "tsuki@meow.mail",
    // password: "pstpstpstpst",
  },
  reducers: {
    attemptLogin: (state, action) => {
      console.log("ACTION: ", action);
    },
    // updateEmail: (state, action) => {
    //   state.email = action.payload;
    // },
    // updatePassword: (state, action) => {
    //   state.password = action.payload;
    // },
  },
});

export const { attemptLogin, updateEmail, updatePassword } =
  welcomeSlice.actions;
export default welcomeSlice.reducer;
