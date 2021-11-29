import redux from "redux";

// default state
const defaultState = {
  user: {
    email: "tsuki@meow.mail",
    password: "pstpstpstpst",
  },
  notes: [{ id: 1, title: "throw rock", body: "today i need to throw a rock" }],
};

// reducers
const notesReducer = (state = defaultState, action) => {
  if (action.type === "login") {
  }
  if (action.type === "logout") {
    return {
      state: {
        ...state.notes,
        ...state.user,
        // state.user.email: '',
        // state.user.password: ''
      },
    };
  }

  if (action.type === "createNote") {
    return {
      state: {
        // need to add the note payload as well
        ...state,
      },
    };
  }

  // default return
  return state;
};

const store = redux.createStore(notesReducer);

export default store;
