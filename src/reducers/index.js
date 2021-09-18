import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import updateNoteReducer from "./updateNote";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  note: updateNoteReducer,
});

export default rootReducer;
