import { configureStore } from "@reduxjs/toolkit";
import notePadReducer from "./components/NotePad/notePadSlice";
import welcomeReducer from "./components/Welcome/welcomeSlice";

export default configureStore({
  reducer: {
    notePad: notePadReducer,
    welcome: welcomeReducer,
  },
});
