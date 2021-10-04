import { configureStore } from "@reduxjs/toolkit";
import notePadReducer from "./components/NotePad/notePadSlice";
import welcomeReducer from "./components/Welcome/welcomeSlice";
import notesReducer from "./components/Notes/notesSlice";

export default configureStore({
  reducer: {
    notePad: notePadReducer,
    welcome: welcomeReducer,
    notes: notesReducer,
  },
});
