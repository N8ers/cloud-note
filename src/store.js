import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import notePadReducer from "./components/NotePad/notePadSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    notePad: notePadReducer,
  },
});
