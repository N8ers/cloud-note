import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import notePadReducer from "./components/NotePad/notePadSlice";
import welcomeReducer from "./components/Welcome/welcomeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    notePad: notePadReducer,
    welcome: welcomeReducer,
  },
});
