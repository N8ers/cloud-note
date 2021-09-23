import { createSlice } from "@reduxjs/toolkit";

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState: {
    email: "tsuki@mewo.mail",
    password: "pstpstpstpst",
  },
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { updateEmail, updatePassword } = welcomeSlice.actions;
export default welcomeSlice.reducer;
